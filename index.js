const textArea = document.querySelector(".container textarea");
const choices = document.querySelector(".choices");

const randomChoice = () => {
  const choices = document.querySelectorAll(".choice");
  const n = choices.length;

  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * n);
    setTimeout(() => {
      choices[idx].classList.add("highlight");
    }, i * 150);
    setTimeout(() => {
      choices[idx].classList.remove("highlight");
    }, 75 + i * 150);
  }
  setTimeout(() => {
    const ans = Math.floor(Math.random() * n);
    choices[ans].classList.add("highlight");
  }, n * 150);
};

textArea.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    textArea.value = "";
    randomChoice();
    return;
  }
  choices.innerHTML = "";
  console.log(e.key);
  const str = textArea.value;
  const arr = str.split(",");
  if (arr[0] === "") {
    return;
  }
  arr.forEach((element) => {
    if (element.trim() !== "") {
      const choice = document.createElement("div");
      choice.classList.add("choice");
      choice.innerHTML = element;
      choices.append(choice);
    }
  });
});
