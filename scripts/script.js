document.querySelector("body").style.position = "fixed";
document.querySelector("body").style.overflow = "hidden";
document.querySelector("#social-media").style.visibility = "hidden";

document.onreadystatechange = function () {
  setTimeout(function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#splash").style.visibility = "visible";
    } else {
      document.querySelector("#splash").style.display = "none";
      document.querySelector("body").style.overflow = "";
      document.querySelector("body").style.position = "";
      window.scrollTo(0, -1);
      document.querySelector("body").style.visibility = "visible";
      document.querySelector("#social-media").style.visibility = "visible";
    }
  }, 5000);
};

if (window.screen.width < 600) {
  // remove icon hover underline
  document
    .getElementById("icon-link-1")
    .classList.remove("underline-hover-effect");
  document
    .getElementById("icon-link-2")
    .classList.remove("underline-hover-effect");
  document
    .getElementById("icon-link-3")
    .classList.remove("underline-hover-effect");
}

// if (window.screen.width > 600) {
//   // adjust icon size for larger screens
//   // document.getElementById("icon1").className = "fa-brands fa-square-facebook fa-4x";
//   // document.getElementById("icon2").className = "fa-brands fa-instagram fa-4x";
//   // document.getElementById("icon3").className = "fa-regular fa-envelope fa-4x";
// }

//button for menu
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn2.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
