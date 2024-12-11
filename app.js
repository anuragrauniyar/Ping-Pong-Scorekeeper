const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const reset = document.querySelector("#reset");
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const max_value = document.querySelector("#count");

const SUCCESS_CLASS = 'has-text-success';
const DANGER_CLASS = 'has-text-danger';

function celebrate() {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.68 }
    });
  }

function checkWinner() {
    const maxScore = Number(max_value.value);
    const player1Score = Number(score1.innerText);
    const player2Score = Number(score2.innerText);

  if (score1.innerText >= max_value.value) {
    player1.disabled = true;
    player2.disabled = true;
    score1.classList.add(SUCCESS_CLASS);
    score2.classList.add(DANGER_CLASS);
    celebrate();
  }
    else if (score2.innerText >= max_value.value) {
    player1.disabled = true;
    player2.disabled = true;
    score1.classList.add(DANGER_CLASS);
    score2.classList.add(SUCCESS_CLASS);
    celebrate();
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
