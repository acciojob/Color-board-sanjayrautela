//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  const colorBoard = document.getElementById('color-board');

  // Create 800 square elements
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Add hover and transition effect
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomColor();
    });

    colorBoard.appendChild(square);
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

