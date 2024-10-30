const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const firstName = people.map(({ name }) => name)

console.log(firstName) // se si vogliono stampare come un array

firstName.forEach((name) => console.log(name)) // se si vogliono stampare singolarmente