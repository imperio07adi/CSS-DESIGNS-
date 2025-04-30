document.querySelector("body").addEventListener("mousemove", eyeball);

function eyeball(event) {
  const eyes = document.querySelectorAll(".eyes");
  eyes.forEach(function (eye) {
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const radian = Math.atan2(event.pageY - eyeCenterY, event.pageX - eyeCenterX);
    const rotate = radian * (180 / Math.PI) + 180;

    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

// Create the glowing cursor
const glowCursor = document.createElement("div");
glowCursor.classList.add("cursor-glow");
document.body.appendChild(glowCursor);

// Move it with the mouse
document.addEventListener("mousemove", (e) => {
  glowCursor.style.left = `${e.clientX}px`;
  glowCursor.style.top = `${e.clientY}px`;
});


document.addEventListener("mousemove", function (e) {
  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");
  dot.style.left = `${e.clientX}px`;
  dot.style.top = `${e.clientY}px`;
  document.body.appendChild(dot);

  // Remove the dot after animation ends
  setTimeout(() => {
    dot.remove();
  }, 500); // Match this to animation duration
});


