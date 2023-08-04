function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function applyRandomAnimations() {
  const gridBlocks = document.querySelectorAll(".grid-block");

  gridBlocks.forEach((block) => {
    const animations = ["float-left", "float-top"];
    const randomAnimation = animations[getRandomInt(0, animations.length - 1)];
    const randomDelay = getRandomInt(0, 5) + "s";

    block.style.animation = `${randomAnimation} 6s ease-in-out infinite`;
    block.style.animationDelay = randomDelay;
  });
}
