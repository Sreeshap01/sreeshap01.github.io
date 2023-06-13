document.addEventListener("DOMContentLoaded", function(){
    const myImage = document.querySelector("img");
    myImage.addEventListener("click", function(){
        const mySrc = myImage.getAttribute("src");
        if (mySrc === "images/firefox-logo.png"){
            myImage.setAttribute("src", "images/firefox-logo2.jpg");
        } else{
            myImage.setAttribute("src", "images/firefox-logo.png");
        }
    })

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");

    myButton.addEventListener("click",function setUserName() {
        const myName = prompt("Please enter your name.");
        if (!myName) {
          setUserName();
        } else {
          localStorage.setItem("name", myName);
          myHeading.textContent = `Mozilla is cool, ${myName}`;
        }
      });
    
});