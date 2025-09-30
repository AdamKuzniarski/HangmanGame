const WORDS = [
  "suggestion",
  "device",
  "database",
  "speaker",
  "salad",
  "ear",
  "strategy",
  "product",
  "politics",
  "category",
  "housing",
  "committee",
  "garbage",
  "assistance",
  "discussion",
];

const ul = document.getElementById("abc");
const div = document.getElementById("line");
const underScore = document.getElementById("underscore");
const MAX_WRONG = 10;

/* Utils */
const randomIndex = Math.floor(Math.random() * WORDS.length);
const randomPick = WORDS[randomIndex];
const alphabetKleinArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

/*  */
const looseLetterArr = [...randomPick];
console.log(looseLetterArr);
function ABC() {
  alphabetKleinArray.forEach((letter) => {
    const li = document.createElement("li");
    li.textContent = letter;
    ul.append(li);
    li.addEventListener("click", () => {
      li.classList.add("pressed-letter");
      const pressedLetter = looseLetterArr.filter(
        (letter) => letter === li.textContent
      );
      console.log(pressedLetter)
      const x = looseLetterArr.includes(pressedLetter)
        console.log(x)

        
      
    });
  });
}

ABC();

/* function line() {
  x.forEach((letter) => {
    const p = document.createElement("p");
    p.textContent = letter;
    div.append(p);
  });
}
console.log(x.length);
line(); */

function underscore() {
  const underScore = document.createElement("p");
  underScore.textContent = "_ ".repeat(looseLetterArr.length);
  div.append(underScore);
}

underscore();

function findIndexLetter(letter) {}
findIndexLetter();
