const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const button = document.querySelector("button");
button.addEventListener("click", updateName);

const button2 = document.querySelectorAll("button")[1];
button2.addEventListener("click", createPara);

const b = document.getElementById("but");
b.textContent = "aa"


function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
function createPara(){
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para)
}