let paragraphElement = document.querySelector("p");

function changeParaghraphText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicked!");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParaghraphText);

let inputElement = document.querySelector("input");

function retriveUserInput(event) {
  //let enteredText = inputElement.value;
  let enteredText = event.target.value;
  //let enteredText = event.data; => this is different
  console.log(enteredText);
  //console.log(event);
}

inputElement.addEventListener("input", retriveUserInput);
