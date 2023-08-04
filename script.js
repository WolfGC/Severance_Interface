import { scaleDivs, resetGrid } from "./modules/scaleDivs.js";
import initGrid from "./modules/initGrid.js";
import renderFooter from "./modules/renderFooter.js";
import totalCompletion from "./modules/calcPercentages.js";
import { applyRandomAnimations } from "./modules/getAnimation.js";

const gridContainer = document.querySelector(".grid-container");
const gridSizeInput = 25;

document.addEventListener("mousemove", function (event) {
  const x = event.pageX;
  const y = event.pageY;
  scaleDivs(x, y);
});

gridContainer.addEventListener("mouseleave", resetGrid);
totalCompletion;
initGrid(gridContainer, gridSizeInput);
renderFooter();
applyRandomAnimations();
