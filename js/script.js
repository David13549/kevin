/* =========================================================
   CONFIGURACIÓN
========================================================= */

// Fecha en que comenzó la relación.
// Formato: año, mes - 1, día


/* =========================================================
   ELEMENTOS
========================================================= */

const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

const heartButton = document.getElementById("heartButton");
const tapMessage = document.getElementById("tapMessage");

const loadingBox = document.getElementById("loadingBox");
const loadingBar = document.getElementById("loadingBar");
const loadingText = document.getElementById("loadingText");
const loadingPercent = document.getElementById("loadingPercent");

const letterButton = document.getElementById("letterButton");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");



/* =========================================================
   PRELOADER / CORAZÓN
========================================================= */

let loadingStarted = false;

const loadingMessages = [
  { at: 0, text: "Preparando algo especial..." },
  { at: 18, text: "Recordando nuestra historia..." },
  { at: 38, text: "Guardando nuestros momentos..." },
  { at: 58, text: "Casi está listo..." },
  { at: 78, text: "Esto es para ti, Rossela..." },
  { at: 94, text: "Una pequeña sorpresa..." }
];

heartButton.addEventListener("click", () => {

  if (loadingStarted) return;

  loadingStarted = true;

  tapMessage.textContent = "Quédate un momento...";

  loadingBox.classList.add("active");

  let progress = 0;

  const interval = setInterval(() => {

    progress += 1;

    loadingBar.style.width = `${progress}%`;
    loadingPercent.textContent = `${progress}%`;

    const currentMessage = [...loadingMessages]
      .reverse()
      .find(item => progress >= item.at);

    if (currentMessage) {
      loadingText.textContent = currentMessage.text;
    }

    if (progress >= 100) {

      clearInterval(interval);

      loadingText.textContent = "Ya está listo.";
      loadingPercent.textContent = "100%";
      tapMessage.textContent = "Para ti, Rossela ♥";

      setTimeout(() => {
        intro.classList.add("hide");
        mainContent.classList.remove("hidden");

        document.body.style.overflow = "auto";

        setTimeout(() => {
          document.querySelector(".hero .reveal")?.classList.add("visible");
        }, 300);

      }, 900);
    }

  }, 48);
});


/* CARTA */

function openLetter() {

  letterButton.classList.add("open");

  setTimeout(() => {
    letterModal.classList.add("open");
    letterModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }, 650);
}

function closeLetterModal() {

  letterModal.classList.remove("open");
  letterModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "auto";

  setTimeout(() => {
    letterButton.classList.remove("open");
  }, 300);
}

letterButton.addEventListener("click", openLetter);
closeLetter.addEventListener("click", closeLetterModal);

document.querySelector(".modal-backdrop").addEventListener(
  "click",
  closeLetterModal
);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && letterModal.classList.contains("open")) {
    closeLetterModal();
  }
});


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.16
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


/* =========================================================
   STITCH
========================================================= */

const stitchScene = document.querySelector(".stitch-scene");

const stitchObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        stitchScene.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.45
  }
);

if (stitchScene) {
  stitchObserver.observe(stitchScene);
}


/* =========================================================
   CORAZONES AL ABRIR LA CARTA
========================================================= */

function createFloatingHeart() {

  const heart = document.createElement("span");

  heart.textContent = "♥";

  heart.style.position = "fixed";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = "10px";
  heart.style.zIndex = "10001";
  heart.style.pointerEvents = "none";
  heart.style.color = Math.random() > .5 ? "#c77a84" : "#722c38";
  heart.style.fontSize = `${12 + Math.random() * 16}px`;
  heart.style.opacity = "0";

  document.body.appendChild(heart);

  const duration = 2500 + Math.random() * 1800;

  heart.animate(
    [
      {
        transform: "translateY(0) scale(.5) rotate(0deg)",
        opacity: 0
      },
      {
        transform: "translateY(-30vh) scale(1) rotate(15deg)",
        opacity: .8,
        offset: .25
      },
      {
        transform: "translateY(-110vh) scale(.8) rotate(-20deg)",
        opacity: 0
      }
    ],
    {
      duration,
      easing: "ease-out"
    }
  );

  setTimeout(() => heart.remove(), duration);
}

letterButton.addEventListener("click", () => {

  let count = 0;

  const hearts = setInterval(() => {

    createFloatingHeart();

    count++;

    if (count >= 18) {
      clearInterval(hearts);
    }

  }, 100);
});


/* =========================================================
   EVITAR SCROLL DURANTE LA INTRO
========================================================= */

document.body.style.overflow = "hidden";
