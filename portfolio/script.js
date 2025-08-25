// Function to highlight "Rakibur"
function applyHighlight(s) {
  return s.replace(/Rakibur/g, '<span class="highlight">Rakibur</span>');
}

// Function to type text continuously (no cursor)
function typeElement(el, speed = 150, done = () => {}) {
  const text = el.getAttribute("data-text") || "";
  let i = 0;

  function tick() {
    el.innerHTML = applyHighlight(text.slice(0, i));
    i++;
    if (i <= text.length) {
      setTimeout(tick, speed); // continuous typing
    } else {
      done();
    }
  }

  tick();
}

// Run after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  const types = document.querySelectorAll(".intro .type");
  const subtitle = document.querySelector(".intro .subtitle");

  // Sequence: h2 → h1 → subtitle
  typeElement(types[0], 150, () => {
    typeElement(types[1], 150, () => {
      setTimeout(() => subtitle.classList.add("show"), 300);
    });
  });
});



