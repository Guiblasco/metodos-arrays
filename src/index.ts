const years: number[] = [];
let initialYear = 2000;
const actualYear = 2024;

for (initialYear; initialYear <= actualYear; initialYear++) {
  years.push(initialYear);
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

let marks: number[] = [];
marks = [5, 2, 6, 8, 10];
let orderedMarks: number[] = marks.sort((a, b) => a - b);

console.log(`Notas ordenadas de menor a mayor: ${orderedMarks}`);

let passMarks: number[] = [];
for (let number = 0; number < marks.length; number++) {
  if (marks[number] >= 5) {
    passMarks.push(marks[number]);
  }
}
console.log(`Notas aprobadas ${passMarks}`);

let midMark: number = 0;
for (let number = 0; number < marks.length; number++) {
  midMark += marks[number];
}
midMark = midMark / marks.length;

console.log(`La nota media de los alumnos es: ${midMark}`);

let maxMark: number = 0;
let minMark: number = 10;

for (let number = 0; number < marks.length; number++) {
  if (marks[number] > maxMark) {
    maxMark = marks[number];
  }
  if (marks[number] < minMark) {
    minMark = marks[number];
  }
}
console.log(`La nota máxima es: ${maxMark}`);
console.log(`La nota mínima es: ${minMark}`);
