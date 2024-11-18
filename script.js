window.addEventListener("load", init);

const level = {
  easy: 6,
  medium: 4,
  hard: 3,
};

function handleChange(selectLevel) {
  let selectedValue = selectLevel.value;
  if (selectedValue === "hard") {
    currentLevel = level.hard;
  } else if (selectedValue === "easy") {
    currentLevel = level.easy;
  } else if (selectedValue === "medium") {
    currentLevel = level.medium;
  }
  seconds.innerHTML = currentLevel;
}

let currentLevel = level.easy;

let score = 0;
let time = currentLevel;
let isPlaying;

// DomElement
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const message = document.getElementById("message");
const restart = document.getElementById("restart");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const seconds = document.getElementById("seconds");
const displayHighScore = document.querySelector(".high-score");

// Get high score from localStorage or set it to 0 if not present
let highScore = parseInt(localStorage.getItem("highScore")) || 0;
displayHighScore.innerHTML = highScore;

const words = [
  "precious",
  "lucky",
  "river",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "twitter",
  "confirm",
  "lost",
  "storage",
  "animal",
  "antelope",
  "ballon",
  "catoon",
  "determination",
  "examination",
  "fashion",
  "faculty",
  "george",
  "gorilla",
  "galaxy",
  "image",
  "judge",
  "jordan",
  "institute",
  "technology",
  "private",
  "business",
  "college",
  "calculator",
  "math",
  "physics",
  "general",
  "elect",
  "calculus",
  "electrical",
  "programmer",
  "developer",
  "mechanical",
  "static",
  "environment",
  "lawyer",
  "random",
  "selective",
  "generator",
  "application",
  "school",
  "senator",
  "president",
  "billionaire",
  "front",
  "enroll",
  "deadline",
  "edition",
  "best",
  "national",
  "university",
  "samad",
  "jimoh",
  "immaculate",
  "come",
  "born",
  "arsenal",
  "spur",
  "united",
];

function init() {
  wordInput.addEventListener("input", startMatch);
  showWord(words);
  setInterval(countdown, 1000);
  setInterval(gamestatus, 50);
}

function startMatch() {
  if (matchWord()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
    updateScore();
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWord() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    message.style.color = "green";
    message.style.fontWeight = "bold";
    return true;
  } else {
    message.innerHTML = "";

    return false;
  }
}

function showWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function gamestatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game over !!! ";
    message.style.color = "red";
    message.style.fontWeight = "bold";
    restart.innerHTML = "Type the Above Word to Restart";
    restart.style.fontWeight = "bold";
    restart.style.color = "green";
    wordInput.style.border = "2px red solid";
    score = -1;
    return;
  }
}

function updateScore() {
  scoreDisplay.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    displayHighScore.innerHTML = highScore;
  }
}

if ((displayHighScore = true)) {
  document.querySelector(".new-high-score").innerHTML = "New High Score";
}

// seconds.innerHTML = currentLevel;
