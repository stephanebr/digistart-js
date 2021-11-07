/* LES BOUCLES FOR */
console.log('Bienvenue dans la console JavaScript');
console.log('Vous êtes dans les exercices sur les boucles for');

var nombres = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

// TODO: ÉTAPE 1
// À l'aide d'une boucle for, afficher dans la console toutes les valeurs
// contenues dans le tableau `nombres`, une par une.
for (var i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// TODO: ÉTAPE 2
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, sauf les deux premières.
for (var i = 2; i <= nombres.length - 1; i++) {
  console.log(nombres[i]);
}

for (var i = 0; i <= nombres.length - 3; i++) {
  console.log(nombres[i + 2]);
}

// TODO: ÉTAPE 3
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, sauf les trois dernières.
for (var i = 0; i <= nombres.length - 4; i++) {
  console.log(nombres[i]);
}

// TODO: ÉTAPE 4
// Avec une autre boucle for, afficher dans la console toutes les valeurs
// du tableau `nombres`, une par une, mais en commençant par la dernière
// valeur et en terminant par la première.
for (var i = nombres.length - 1; i >= 0; i--) {
  console.log(nombres[i]);
}

// TODO: ÉTAPE 5
// Avec une autre boucle for, afficher dans la console uniquement les
// valeurs du tableau `nombres` ayant un indice pair (0, 2, 4, etc.),
// une par une.

var prenoms = ['Ali', 'Nour', 'Jean', 'Carole', 'Ibrahim', 'Alma'];
for (var i = 0; i <= prenoms.length - 1; i = i + 2) {
  console.log(prenoms[i]);
}

// TODO: ÉTAPE 6
// À l'aide d'une boucle for, afficher dans la console des messages
// qui saluent chaque prénom contenus dans le tableau `prenoms`.
// Par exemple : "Bonjour Joseph".
for (var i = 0; i <= prenoms.length - 1; i++) {
  console.log('Bonjour ' + prenoms[i]);
}

// TODO: ÉTAPE 7
// Avec une autre boucle for, afficher dans la console uniquement
// le premier prénom contenant plus de 4 lettres.
for (var i = 0; i <= prenoms.length - 1; i++) {
  var prenom = prenoms[i];
  if (prenom.length > 4) {
    console.log(prenom);
    break;
  }
}

// Autre façon de faire avec les méthodes du tableau (array):
var premierPrenom = prenoms.find((prenom) => prenom.length > 4);
console.log(premierPrenom);

// TODO: ÉTAPE 8
// Avec une autre boucle for, construire une nouvelle chaîne de
// caractères (string) qui contiendra tous les prénoms séparés par
// une virgule. Afficher cette nouvelle chaîne de caractères dans
// la console.
var tousLesPrenoms = '';
for (var i = 0; i <= prenoms.length - 1; i++) {
  tousLesPrenoms = tousLesPrenoms + prenoms[i];
  if (i < prenoms.length - 1) {
    // On ajoute une virugule après le prénom sauf pour le dernier élément
    tousLesPrenoms = tousLesPrenoms + ', ';
  }
}
console.log(tousLesPrenoms);

// Autre façon de faire sans loop et avec les méthodes du tableau (array):
var tousLesPrenoms2 = prenoms.join(', ');
console.log(tousLesPrenoms2);
