// var splashScreen = document.querySelector(".splash");
// var body = document.querySelector("body");
// setTimeout(() => {
//   splashScreen.style.opacity = 0;
//   body.classList.remove("disable-scroll");
//   setTimeout(() => {
//     splashScreen.classList.add("hidden");
//   }, 5000);
// }, 5000);

////////////////////////////////////////////////////////////////

// Get the splash element
const splash = document.getElementById("splash");

// Function to disable scrolling
function disableScroll() {
  // Store the current scroll position
  const scrollY = window.scrollY;
  // Add a class to the body to prevent scrolling
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
}

// Function to enable scrolling
function enableScroll() {
  // Remove the class that prevents scrolling
  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  // Restore the scroll position
  const scrollY = document.body.style.top;
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
}

// Check if the splash element is visible
function isSplashVisible() {
  return splash.style.display !== "none";
}

// Event listener for scroll
function handleScroll() {
  if (isSplashVisible()) {
    disableScroll();
  } else {
    enableScroll();
  }
}

window.addEventListener("scroll", handleScroll);

// Additional code to handle splash visibility toggling
// For example, if splash disappears after a timeout
setTimeout(function () {
  splash.style.display = "none";
  enableScroll(); // Ensure scrolling is enabled when splash disappears
  window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener
}, 5000); // Adjust the timeout as needed

///////////////////////////////////////////////////////////////////////

//load page from top
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

if (window.screen.width > 600) {
  // adjust icon size for larger screens
  document.getElementById("icon1").className =
    "fa-brands fa-square-facebook fa-4x";
  document.getElementById("icon2").className = "fa-brands fa-instagram fa-4x";
  document.getElementById("icon3").className = "fa-regular fa-envelope fa-4x";
}

if (window.screen.width <= 600) {
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
