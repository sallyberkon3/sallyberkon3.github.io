const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/new-york-city.jpg") {
    myImage.setAttribute("src", "images/new-york-city-js.jpg");
  } else {
    myImage.setAttribute("src", "images/new-york-city.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `NEW YORK CITY, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `NEW YORK CITY, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
