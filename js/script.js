// const teachers = [
//   'Nathan',
//   'Ed',
//   'Fabio',
//   'Phil',
//   'Carlo',
//   'Lewis',
//   'Luca'
// ]; // NON MODIFICARE QUESTA VARIABILE

// // 1. Utilizzando un indice sull'array teachers, cambia il valore della
// // variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
// const fourthTeacher = teachers[3]
// console.log(fourthTeacher)

// // 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// teachers [4] = `Patrick`
// console.log(teachers)

// // 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
// const lastTeacher = teachers.pop()
// console.log(lastTeacher)

// // 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
// const firstTeacher = teachers.shift();
// console.log(firstTeacher)

// // 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
// teachers.push(`Vanessa`)
// console.log(teachers)
// // 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
// teachers.unshift(`Sarah`)
// console.log(teachers)
// // 7. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// // e salvalo nella variabile lewisIndex
// const lewisIndex = teachers.indexOf(`Lewis`);
// console.log(lewisIndex)
// // 8. Verifica se l'array teachers è vuoto
// // e salva il risultato nella variabile isTeachersEmpty
// const isTeachersEmpty = teachers.length ===0;
// console.log(isTeachersEmpty)


// ------------BONUS-------------

const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// // 1. Inverti l'ordine degli insegnanti nell'array teachers
// // e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers)
const tempArray = [];
for(let i = teachers.length - 1; i>=0; i--){
  tempArray.push(teachers[i])
}
const reversedTeachers = tempArray
console.log(reversedTeachers)



// // 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// // con un nome di lunghezza maggiore o uguale a 5 caratteri
// const longNames = []
// for (let i=0; i<teachers.length; i++ ) {
// const fiveTeachers = teachers[i]
// if (fiveTeachers.length >=5) {
//   longNames.push(fiveTeachers)
// }
// }
// console.log(longNames)


// // 3. Rimuovi 'Ed' dall'array teachers
// teachers.splice(1, 1,)
// console.log(teachers)

// // 4. Verifica se 'Fabio' è presente nell'array teachers
// // e salva il risultato nella variabile isFabioPresent
// const isFabioPresent = teachers.indexOf(`Fabio`);
// console.log(isFabioPresent)

// // 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// const teachersString = teachers.join(",")
// console.log(teachersString)
