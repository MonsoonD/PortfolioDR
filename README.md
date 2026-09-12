# Portfolio — Damien Renard

Portfolio statique (HTML/CSS/JS, sans dépendance) présentant le profil de Damien Renard,
étudiant en BTS SIO option SISR au CNED.

## Mettre le site en ligne avec GitHub Pages

1. Crée un nouveau dépôt sur GitHub (par exemple `portfolio`).
2. Mets les 3 fichiers (`index.html`, `style.css`, `script.js`) à la racine du dépôt
   — pas dans un sous-dossier.
3. Dans les paramètres du dépôt : **Settings → Pages**.
4. Sous **Source**, choisis la branche `main` et le dossier `/root`, puis **Save**.
5. Après une minute ou deux, le site est accessible à l'adresse :
   `https://<ton-nom-utilisateur>.github.io/<nom-du-depot>/`

## Changer le CV en PDF (facile, une seule ligne à modifier)

Ouvre `script.js` : la toute première ligne utile du fichier est :

```js
const CV_PATH = "cv-damien-renard.pdf";
```

Remplace juste le nom entre guillemets par celui de ton nouveau fichier PDF
(dépose ce PDF à la racine du dépôt, à côté de `index.html`). Le bouton
« Télécharger mon CV » ira automatiquement chercher ce fichier — pas besoin
de retrouver un lien ou un titre exact ailleurs dans le HTML.

## Points à personnaliser

- **Photo de profil** : l'avatar est pour l'instant un simple médaillon avec tes initiales
  (« DR »). Pour utiliser une vraie photo, ajoute l'image au dépôt et remplace, dans
  `index.html`, le bloc `<div class="avatar">DR</div>` par une balise `<img>`.
- **Deuxième carte « Prochains projets »** dans `#projets` : à remplacer par tes vrais
  projets au fur et à mesure de ton BTS SIO SISR.
