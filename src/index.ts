const years: number[] = [];

const currentYear = 2024;

for (let year = 2000; year <= currentYear; year++) {
  years.push(year);
}
console.log(years);

const words = [
  "confín.",
  "otro",
  "al",
  "uno",
  "del",
  "conocido",
  "mar",
  "todo",
  "en",
  "Temido,",
  "el",
  "bravura",
  "su",
  "por",
  "llaman,",
  "le",
  "pirata",
  "Bajel",
  "bergantín.",
  "velero",
  "un",
  "vuela",
  "sino",
  "mar",
  "el",
  "corta",
  "no",
  "vela,",
  "toda",
  "a",
  "popa",
  "en",
  "viento",
  "banda,",
  "por",
  "cañones",
  "diez",
  "Con",
];
console.log(words.reverse().join(" "));

let notes: number[] = [];
notes = [5, 2, 6, 8, 10];
let sortedNotes: number[] = notes.sort((a, b) => a - b);

console.log(`Notas ordenadas de menor a mayor: ${sortedNotes}`);

let approveNotes: number[] = [];
for (let note of notes) {
  if (note >= 5) {
    approveNotes.push(note);
  }
}
console.log(`Notas aprobadas ${approveNotes}`);

let averageNote: number = 0;
for (let note of notes) {
  averageNote += note;
}
averageNote = averageNote / notes.length;

console.log(`La nota media de los alumnos es: ${averageNote}`);

let maximaNote: number = notes[notes.length - 1];
let minimumNote: number = notes[0];

console.log(`La nota máxima es: ${maximaNote}`);
console.log(`La nota mínima es: ${minimumNote}`);
