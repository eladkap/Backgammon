function Sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Random integer values between 1 to maxValue
function RandomInt(maxValue) {
  return Math.floor(Math.random() * maxValue) + 1;
}
