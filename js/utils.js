function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Random integer values between 1 to maxValue
function RandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue) + 1;
}

function SetButton(x, y, text, fontSize, backColor, action) {
  let button = createButton(text);
  button.position(x, y);
  button.style("font-size", fontSize);
  button.style("background-color", backColor);
  button.mousePressed(action);
  return button;
}

function EnableButton(button) {
  button.removeAttribute("disabled");
}

function DisableButton(button) {
  button.attribute("disabled", "");
}
