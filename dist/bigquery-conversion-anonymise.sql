-- Conversion funnel by device · anonymised portfolio extract
-- The original company project and GA4 dataset identifiers were replaced.

WITH events AS (
  SELECT
    PARSE_DATE(
      '%Y-%m-%d',
      FORMAT_TIMESTAMP('%Y-%m-%d', TIMESTAMP_MICROS(event_timestamp))
    ) AS event_date,
    event_name,
    event_timestamp,
    user_pseudo_id AS user_id,
    device.category AS device_category,
    (
      SELECT value.int_value
      FROM UNNEST(event_params)
      WHERE key = 'ga_session_id'
    ) AS session_id
  FROM `company_analytics.ga4_export.events_*`
  WHERE _TABLE_SUFFIX BETWEEN FORMAT_DATE(
    '%Y%m%d', DATE_SUB(CURRENT_DATE(), INTERVAL 12 MONTH)
  ) AND FORMAT_DATE('%Y%m%d', CURRENT_DATE())
),

filtered_events AS (
  SELECT
    event_date,
    session_id,
    user_id,
    device_category,
    event_timestamp,
    event_name
  FROM events
  WHERE session_id IS NOT NULL
),

pivot_event AS (
  SELECT
    event_date,
    session_id,
    user_id,
    device_category,
    MAX(IF(event_name = 'view_cart', 1, 0)) AS view_cart,
    MAX(IF(event_name = 'purchase', 1, 0)) AS purchase_valid,
    ROUND(
      (MAX(event_timestamp) - MIN(event_timestamp)) / (1000000 * 60),
      2
    ) AS duration_minutes
  FROM filtered_events
  GROUP BY event_date, session_id, device_category, user_id
)

SELECT
  event_date,
  user_id,
  device_category,
  COUNT(DISTINCT session_id) AS number_sessions,
  SUM(view_cart) AS number_view_cart,
  SUM(purchase_valid) AS number_purchase,
  SAFE_DIVIDE(
    COUNTIF(purchase_valid = 1),
    COUNT(DISTINCT session_id)
  ) AS conversion_rate,
  SAFE_DIVIDE(
    COUNTIF(purchase_valid = 1),
    COUNTIF(view_cart = 1)
  ) AS conversion_rate_cart,
  SUM(duration_minutes) / COUNT(DISTINCT session_id) AS average_duration_minutes
FROM pivot_event
WHERE device_category IN ('mobile', 'desktop')
GROUP BY event_date, device_category, user_id;
