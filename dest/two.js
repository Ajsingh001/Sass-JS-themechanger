//File for Theme-Change Button;

//Globel variable for selecting

const darkmode = document.querySelector("body"); //Select the body element
let modeclass = darkmode.className; //Select the body-className

const themebuttom = document.querySelector(".Mode"); //select the Button Element

//A function that change the Theme-mode through ternary operator
const buttonone = themebuttom.addEventListener("click", function () {
  //The logic of toogle change
  const check =
    darkmode.className == "light"
      ? (darkmode.className = "dark")
      : (darkmode.className = "light");

  console.log(modeclass);
  console.log(check);
});
