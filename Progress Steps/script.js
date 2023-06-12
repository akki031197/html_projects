const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = document.querySelectorAll(".circle");

let currentActive = 0; // Start with 0 as the initial active index

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive >= circles.length) {
    currentActive = circles.length - 1;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 0) {
    currentActive = 0;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx <= currentActive) {
      circle.classList.add("circle-active");
    } else {
      circle.classList.remove("circle-active");
    }
  });

  const actives = document.querySelectorAll("circle-active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 0) {
    prev.disabled = true;
  } else if (currentActive === circles.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// Set initial active state
update();
