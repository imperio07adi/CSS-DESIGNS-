function toggleLight() {
    const bulbHolder = document.querySelector('.bulb-holder');
    const pullString = document.querySelector('.pull-string');
    
    // Toggle the light
    bulbHolder.classList.toggle('light-on');
    
    // Animate the pull string
    pullString.classList.add('pulled');
    
    // Remove the pulled class after animation completes
    setTimeout(() => {
      pullString.classList.remove('pulled');
    }, 1000); // match animation time (1s)
  }
  