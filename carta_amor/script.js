const intro = document.getElementById("intro");
const message = document.getElementById("message");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const msgText = document.getElementById("msgText");

const messages = [
  "¿Segura? 😢",
  "Piénsalo bien 🥺",
  "No seas cruel 😭",
  "Doris por favor 😭💔",
  "No me rompas el corazón 😔"
];

let count = 0;

function openMessage() {
  intro.classList.remove("active");
  message.classList.add("active");
}

/* NO HUIDIZO */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 180;
  const y = Math.random() * 60;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  yesBtn.style.transform = `scale(${1 + count * 0.15})`;
  msgText.textContent = messages[count % messages.length];
  count++;
});

/* SÍ FINAL */
yesBtn.addEventListener("click", () => {
  msgText.textContent = "Sabía que dirías que sí 💖😍";
  launchConfetti();
});

/* CONFETI */
function launchConfetti() {
  const canvas = document.getElementById("confetti");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");

  for (let i = 0; i < 150; i++) {
    ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
    ctx.fillRect(
      Math.random()*canvas.width,
      Math.random()*canvas.height,
      6, 6
    );
  }
}

/* MÚSICA */
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸";
  } else {
    music.pause();
    musicBtn.textContent = "▶";
  }
};
