function scaleDivs(x, y) {
  document.querySelectorAll("main div").forEach((div) => {
    const oX = div.offsetLeft + 50 - x;
    const oY = div.offsetTop + 50 - y;
    const delta = Math.sqrt(oX * oX + oY * oY);

    let scaleValue;
    if (delta <= 100) {
      scaleValue = 2.6;
    } else if (delta <= 130) {
      scaleValue = 2.3;
    } else if (delta <= 140) {
      scaleValue = 1.8;
    } else if (delta <= 150) {
      scaleValue = 1.5;
    } else if (delta <= 180) {
      scaleValue = 1.2;
    } else if (delta <= 200) {
      scaleValue = 1.1;
    } else {
      scaleValue = 1;
    }

    div.style.transform = `scale(${scaleValue})`;
  });
}

function resetGrid() {
  document.querySelectorAll("main div").forEach((div) => {
    div.style.transform = "scale(1)";
  });
}

export { scaleDivs, resetGrid };
