# Mesure d’audience du portfolio

Le site utilise Google Analytics 4 (GA4), avec consentement préalable.

## Activation

L’identifiant de mesure `G-WMFGP6T0QX` est configuré dans `dist/analytics-config.js`. Les changements publiés sur GitHub sont redéployés automatiquement par Vercel.

## Événements suivis

- `page_view` : pages consultées, envoyé automatiquement par GA4.
- `cv_download` : clic sur le téléchargement du CV.
- `linkedin_click` : clic vers le profil LinkedIn.
- `email_click` : ouverture du lien e-mail.

Les événements personnalisés ne sont envoyés qu’après acceptation du bandeau de mesure d’audience.

## Rapports utiles dans GA4

- Visites cumulées : **Rapports → Acquisition → Acquisition de trafic**, métrique « Sessions ».
- Visiteurs différents : **Rapports → Acquisition → Acquisition d’utilisateurs**, métrique « Utilisateurs actifs ».
- Visiteurs de la page Expériences : **Rapports → Engagement → Pages et écrans**, ligne `/experience` ou `/experience.html`, métrique « Utilisateurs actifs ».
- Téléchargements du CV : **Rapports → Engagement → Événements**, événement `cv_download`.
- Canaux d’acquisition : **Rapports → Acquisition → Acquisition de trafic**, dimension « Groupe de canaux par défaut de la session » ou « Source/Support de la session ».

## Liens de campagne

Pour identifier précisément LinkedIn, partager une URL avec paramètres UTM, par exemple :

`https://votre-domaine.fr/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio`

Sans UTM, certaines applications mobiles peuvent masquer le site d’origine et la visite apparaîtra comme « Direct ».
