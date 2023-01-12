const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dinosaur-for-website.jpg") {
    myImage.setAttribute("src", "images/neat-ass-dinosaur.jpg");
  } else {
    myImage.setAttribute("src", "images/neat-ass-dinosaur2.jpg");
  } 
  if (mySrc === "images/neat-ass-dinosaur2.jpg") {
    myImage.setAttribute("src", "images/dinosaur-for-website.jpg");
  } 
};  
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Look at this cool ass dinosaur, ${myName}`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Look at this cool ass dinosaur, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };