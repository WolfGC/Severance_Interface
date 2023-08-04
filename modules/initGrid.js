function initGrid(gridContainer, x) {
  // gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

  for (let i = 0; i < x * x; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("grid-block");
    gridBlock.textContent = `${getNumber()}`;
    gridContainer.appendChild(gridBlock);
  }
}

function getNumber() {
  return Math.floor(Math.random() * 10);
}

export default initGrid;
