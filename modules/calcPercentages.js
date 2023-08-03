import results from "../stores/store.js";

const renderPercentage = document.querySelector(".overall");
let sumPercentage = 0;
const totalPercentage = 500;

results.forEach((result) => {
  sumPercentage += result.percentage;
});

const totalCompletion = (renderPercentage.textContent =
  Math.round((sumPercentage / totalPercentage) * 100) + "% Complete");

export default totalCompletion;
