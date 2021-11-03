/* LES OBJETS */
console.log('Bienvenue dans la console javascript');
console.log('Vous êtes dans les exercices sur les objets (objects)');

// ------ TODO 1 ------

// 1. Déclarer une variable student qui contient un objet avec les propriétés et valeurs suivantes :
// - name : Votre nom
// - age : Votre age
// - city: Votre ville

var student = {
  name: 'Araujo',
  age: 31,
  city: 'Paris'
};

// 2. Afficher dans la console l'objet student.

console.log(student);


// ------ TODO 2 ------
var user = {
  name: 'John',
  age: 30
};

// 1. Ajouter une propriété (clé) "city" de valeur "Paris" à l'objet user.

user.city = 'Paris';

// 2. Afficher dans la console l'âge de John.

console.log(user.age)

// 3. Remplacer la valeur de "city" avec "Nice".

user.city = 'Nice'; 

console.log(user.city);


// ------ TODO 3 ------
var users = [user, { name: 'Emma', age: 32, city: 'London' }];

// 1. Afficher dans la console l'objet dont le name est "Emma".
console.log(users[1]);


// 2. Afficher dans la console "John", en accédant aux élements du tableau
// puis à la propriété de l'objet.
console.log(users[0])
console.log(users[0].name)
console.log(users[0].age)
console.log(users[0].city)


