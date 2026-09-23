# Portfolio — Damien Renard

🔗 **Site en ligne :** https://monsoond.github.io/PortfolioDR/

## Mettre à jour le CV en PDF

1. Ouvre `script.js` et repère la toute première ligne utile :

   ```js
   const CV_PATH = "cv-damien-renard.pdf";
   ```

2. Remplace le nom entre guillemets par celui de ton nouveau fichier PDF.
3. Dépose ce PDF à la racine du dépôt, à côté de `index.html`.
4. Commit et push — le bouton « Voir / télécharger mon CV » ira automatiquement chercher ce fichier.

## Mettre à jour le lien LinkedIn

Juste en dessous de `CV_PATH` dans `script.js` :

```js
const LINKEDIN_URL = "https://www.linkedin.com/in/damien-renard";
```

Remplace par l'URL complète de ton vrai profil LinkedIn.

## Important : ne pas oublier le dossier `projets/`

En plus de `index.html`, `style.css`, `script.js` et ton CV, il y a maintenant un dossier
`projets/` (avec la fiche détaillée d'Adventurer Survivor dedans). Garde bien ce dossier
à la racine du dépôt, au même niveau que `index.html`, sinon le lien depuis la carte
projet ne fonctionnera plus.
