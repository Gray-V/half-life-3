let currentLevel = 0;

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}

function startGame() {
  currentLevel = 1;
  showScreen('level1');
}

function fakeMenuClick() {
  const messages = [
    "ERROR: Feature not implemented (coming soon™)",
    "LOADING... Just kidding, this doesn't work",
    "Please insert HL3 disk (disk not found)",
    "CONNECTION LOST: Cannot reach Black Mesa servers",
    "ACCESS DENIED: Gordon Freeman's password expired",
    "CRITICAL ERROR: Valve can't count this high"
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}

function correctAnswer(nextLevel) {
  if (nextLevel === 2) {
    setTimeout(() => showScreen('level2'), 500);
  } else if (nextLevel === 3) {
    setTimeout(() => showScreen('level3'), 500); 
  }
}

function wrongAnswer() {
  showScreen('game-over');
}

function restartGame() {
  currentLevel = 0;
  showScreen('start-screen');
}

