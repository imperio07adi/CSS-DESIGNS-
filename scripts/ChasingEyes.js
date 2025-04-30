function eyeball(x, y) {
  const eyes = document.querySelectorAll(".eyes");
  eyes.forEach(function (eye) {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const radian = Math.atan2(y - eyeCenterY, x - eyeCenterX);
    const rotate = radian * (180 / Math.PI) + 180;

    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

// For mouse movement
document.addEventListener("mousemove", function (event) {
  eyeball(event.clientX, event.clientY);
});

// For touch movement
document.addEventListener("touchmove", function (event) {
  if (event.touches.length > 0) {
    const touch = event.touches[0];
    eyeball(touch.clientX, touch.clientY);
  }
});



function createTrail(x, y) {
  const dot = document.createElement("div");
  dot.classList.add("cursor-dot");
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  document.body.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 500); // Match with animation
}

// Desktop mouse movement
document.addEventListener("mousemove", function (e) {
  createTrail(e.clientX, e.clientY);
});

// Mobile finger movement
document.addEventListener("touchmove", function (e) {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    createTrail(touch.clientX, touch.clientY);
  }
});



