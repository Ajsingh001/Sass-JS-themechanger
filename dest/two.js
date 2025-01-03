//File for Theme-Change Button;

//Globel variable for selecting
const darkmode = document.querySelector("body");
let modeclass = darkmode.className;

const themebuttom = document.querySelector(".Mode");
const buttonone = themebuttom.addEventListener("click", function () {
  //If you want to replace all the existing class names with a new one:
  const check =
    darkmode.className == "light"
      ? (darkmode.className = "dark")
      : (darkmode.className = "light");

  console.log(modeclass);
  console.log(check);
});
