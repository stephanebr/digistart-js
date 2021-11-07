/* LES FONCTIONS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les fonctions');

// ------ TODO 1 ------
// TODO: ÉTAPE 1
// Créer une fonction sayHello qui imprime "Bonjour" dans la console

function sayHello() {
  console.log('Bonjour');
}

// TODO: ÉTAPE 2
// L'exécuter

sayHello();

// ------ TODO 2 ------
// TODO: ÉTAPE 1
// Créer une fonction sayHelloName qui prend en paramètre le nom d'une personne, et
// qui imprime "Bonjour " suivi du nom de la personne dans la console.

function sayHelloName(name) {
  console.log('Bonjour ' + name);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

sayHelloName('Florian');

// ------ TODO 3 ------
// TODO: ÉTAPE 1
// Créer une fonction addTwo qui prend en paramètre un nombre et qui
// retourne ce nombre + 2

function addTwo(number) {
  return number + 2;
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

var result = addTwo(3);
console.log(result);

// ------ TODO 4 ------
// TODO: ÉTAPE 1
// Créer une fonction displaySum qui prend en paramètre deux nombres entiers
// et qui affiche la somme de ces deux nombres dans la console.

function displaySum(a, b) {
  var sum = a + b;
  console.log(sum);
}

// TODO: ÉTAPE 2
// L'exécuter avec le paramètre de votre choix.

displaySum(4, 2);
