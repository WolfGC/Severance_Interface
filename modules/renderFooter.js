import results from "../stores/store.js";

const renderFooter = () => {
  results;

  const createDivWithClass = (className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  };

  const footer = document.querySelector("footer");

  results.forEach((result) => {
    const progCont = createDivWithClass("progress-container");
    const progNum = createDivWithClass("progress-number");
    const progPercent = createDivWithClass("progress-percent");
    const progBar = createDivWithClass("progress-bar");
    const percentageSpan = document.createElement("span");
    const linecont = createDivWithClass("line-cont");
    const line = document.createElement("hr");
    const line2 = document.createElement("hr");

    line.classList.add("first");
    line2.classList.add("second");

    progCont.appendChild(linecont);
    progCont.appendChild(progNum);
    progCont.appendChild(progPercent);
    progCont.appendChild(progBar);
    progPercent.appendChild(progBar);
    progPercent.appendChild(percentageSpan);
    linecont.appendChild(line);
    linecont.appendChild(line2);

    progNum.textContent = "0" + result.number;
    percentageSpan.textContent = result.percentage + "%";

    progBar.style.width = result.percentage + "%";

    progCont.addEventListener("mouseover", () => {
      line.classList.add("rotate-first");
      line2.classList.add("rotate-second");
    });

    progCont.addEventListener("mouseout", () => {
      line.classList.remove("rotate-first");
      line2.classList.remove("rotate-second");
    });

    footer.appendChild(progCont);
  });
  const serialID = createDivWithClass("serialID");
  serialID.textContent = "0x 150b4a : 0x 0AEAFC";
  footer.appendChild(serialID);
};

export default renderFooter;
