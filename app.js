const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const max_value = document.querySelector("#count");

const SUCCESS_CLASS = "has-text-success";
const DANGER_CLASS = "has-text-danger";

function celebrate() {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.68 },
  });
}

function winnerAnnouncement() {
  player1.disabled = true;
  player2.disabled = true;
  celebrate();
}

function checkWinner() {
  const maxScore = parseInt(max_value.value);
  const player1Score = parseInt(score1.innerText);
  const player2Score = parseInt(score2.innerText);

  if (player1Score >= maxScore) {
    winnerAnnouncement();
    score1.classList.add(SUCCESS_CLASS);
    score2.classList.add(DANGER_CLASS);
  }
   else if (player2Score >= maxScore) {
    winnerAnnouncement();
    score1.classList.add(DANGER_CLASS);
    score2.classList.add(SUCCESS_CLASS);
  }
}

player1.addEventListener("click", () => {
  score1.innerText = Number(score1.innerText) + 1;
  checkWinner();
});

player2.addEventListener("click", () => {
  score2.innerText = Number(score2.innerText) + 1;
  checkWinner();
});

function update() {
  score1.innerText = 0;
  score2.innerText = 0;
  player1.disabled = false;
  player2.disabled = false;
  score1.classList.remove(SUCCESS_CLASS, DANGER_CLASS);
  score2.classList.remove(SUCCESS_CLASS, DANGER_CLASS);
}

reset.addEventListener("click", update);
max_value.addEventListener("change", update);
