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

## Ajouter ton CV en PDF

Le bouton « Télécharger mon CV » pointe vers un fichier `cv-damien-renard.pdf`.
Ajoute ce fichier à la racine du dépôt (même dossier que `index.html`) pour que le lien
fonctionne — sinon, remplace le lien dans `index.html` (ligne `href="cv-damien-renard.pdf"`)
par l'adresse de ton choix.

## Points à personnaliser

- **Dates du BTS SIO SISR** dans la section Parcours (`#parcours`) : j'ai laissé « En cours »
  car les dates précises n'étaient pas connues.
- **Compétences réseaux & systèmes** dans `#competences` : j'ai repris les grands thèmes du
  programme officiel SISR à titre indicatif — remplace-les par ce que tu maîtrises réellement
  au fur et à mesure de ta formation.
- **Photo de profil** : l'avatar est pour l'instant un simple médaillon avec tes initiales
  (« DR »). Pour utiliser une vraie photo, ajoute l'image au dépôt et remplace, dans
  `index.html`, le bloc `<div class="avatar">DR</div>` par une balise `<img>`.
