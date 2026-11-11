# woassi-frontend

Interface web de **woassi**, la plateforme de commerce sur WhatsApp : site vitrine et espace commerçant.
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Pages

| Route | Contenu |
| --- | --- |
| `/` | Landing page |
| `/confidentialite`, `/conditions` | Pages légales |
| `/tableau-de-bord` | Accueil commerçant (mobile, tablette, bureau) |
| `/connexion`, `/inscription`, `/tableau-de-bord/{commandes,stock,comptabilite,reglages}` | Écrans d'attente : maquettes à venir |

## Organisation

```
src/app/(site)        site vitrine
src/app/(merchant)    espace commerçant
src/components/ui     primitives : logo, bouton, étiquette, statut, icônes
src/components/site   sections du site vitrine
src/components/merchant  composants du tableau de bord
src/lib               configuration, formatage, données de démonstration
```

Les données affichées viennent de `src/lib/mock-data.ts` ; l'API `woassi-backend` n'est pas encore branchée.
Les valeurs entre crochets (contacts, mentions légales) sont à compléter dans `src/lib/site-config.ts` et dans les pages légales.

## Design system

Les tokens sont dans `src/app/globals.css` : couleurs par rôle (`fg`, `canvas`, `line`…), deux thèmes
(`.theme-site`, `.theme-app`), échelle typographique en `rem`, rayons, ombres. La palette Tailwind par
défaut est désactivée : on n'utilise que les tokens.

## Accessibilité (WCAG 2.2 AA)

Règles à conserver pour tout nouvel écran :

- **Contraste** : 4,5:1 pour le texte, 3:1 pour les grands titres et les contours de champs. Les ratios sont notés à côté de chaque token.
- **Clavier** : tout est atteignable au clavier, focus toujours visible, lien d'évitement vers `<main id="contenu">`.
- **Structure** : un seul `h1` par page, niveaux de titres sans saut, régions nommées (`nav`, `main`, `footer`).
- **Cibles** : 44 px pour les actions principales, jamais moins de 24 px.
- **Texte** : tailles en `rem`, hauteurs en `min-height` ; la page reste utilisable à 320 px de large et zoomée à 200 %.
- **Couleur** : jamais seule porteuse d'information (un statut est toujours écrit).
- **Mouvement** : `prefers-reduced-motion` respecté.
- **Illustrations** : les maquettes d'interface du site sont exposées comme des images décrites (`role="img"`).
