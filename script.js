// LOADER
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// TYPING EFFECT
const words = ["Frontend Developer", "Full Stack Developer", "Software Engineer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.querySelector(".typing").textContent = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

// SCROLL REVEAL
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
