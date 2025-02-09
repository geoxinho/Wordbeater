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

const newHighScore = document.querySelector(".new-high-score");

const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const message = document.getElementById("message");
const restart = document.getElementById("restart");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const seconds = document.getElementById("seconds");
const displayHighScore = document.querySelector(".high-score");

// High score from localStorage
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
  "amazing",
  "balance",
  "capture",
  "defense",
  "embrace",
  "fantasy",
  "genuine",
  "harmony",
  "imagine",
  "journey",
  "kingdom",
  "liberty",
  "mystery",
  "natural",
  "organic",
  "package",
  "quality",
  "regular",
  "science",
  "therapy",
  "unified",
  "victory",
  "weather",
  "yielding",
  "zealous",
  "absolute",
  "believe",
  "channel",
  "diamond",
  "element",
  "fashion",
  "gallery",
  "highway",
  "inspire",
  "justice",
  "kitchen",
  "logical",
  "machine",
  "network",
  "obvious",
  "perfect",
  "quarter",
  "rainbow",
  "support",
  "triumph",
];

function init() {
  isPlaying = true; // Initialize isPlaying
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
  scoreDisplay.innerHTML = Math.max(score, 0); // making sure the score isn't negative
}

function matchWord() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    message.style.color = "green";
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
    message.innerHTML = "Game over!";
    message.style.color = "red";
    restart.innerHTML = "Press Enter or click here to restart";
    wordInput.style.border = "2px red solid";
    score = -1;

    restart.onclick = resetGame;
    document.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        resetGame();
      }
    });
  } else {
    restart.innerHTML = "";
    wordInput.style.border = "2px blue solid";
  }
}

function resetGame() {
  isPlaying = true;
  time = currentLevel;
  timeDisplay.innerHTML = time; // to Immediately update the time
  score = 0;
  updateScore();
  message.innerHTML = ""; // to clear game over message
  restart.innerHTML = ""; // to clear restart prompt
  wordInput.value = ""; // to clear input field
  wordInput.style.border = ""; // to reset border style
  showWord(words);
}

function updateScore() {
  scoreDisplay.innerHTML = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem("highScore", highScore);
    displayHighScore.innerHTML = highScore;
    newHighScore.innerHTML = "New High Score";
    newHighScore.style.color = "green";
    newHighScore.style.fontWeight = "bold";
  }
}

seconds.innerHTML = currentLevel;
