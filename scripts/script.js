if (window.screen.width < 600) {
  document.querySelector("#splash").style.visibility = "visible";
  document.querySelector("#social-media").style.visibility = "hidden";

  // Function to prevent default touchmove behavior
  function preventDefaultTouchmove(event) {
    event.preventDefault();
  }

  // Prevent scrolling on touchmove event
  document.addEventListener("touchmove", preventDefaultTouchmove, {
    passive: false,
  });

  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, -1);
      document.querySelector("#splash").style.display = "none";
      document.querySelector("#social-media").style.visibility = "visible";

      // Re-enable scrolling after 5 seconds
      document.removeEventListener("touchmove", preventDefaultTouchmove);
    }, 5000);
  };

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
} else {
  document.querySelector("#splash").style.visibility = "visible";
  document.querySelector("#social-media").style.visibility = "hidden";
  document.querySelector("body").style.overflow = "hidden";

  window.onload = function () {
    setTimeout(function () {
      document.querySelector("#splash").style.display = "none";
      document.querySelector("body").style.overflow = "";
      window.scrollTo(0, -1);
      document.querySelector("#social-media").style.visibility = "visible";
    }, 5000);
  };
}

// Check if the page is zoomed in
if (window.innerWidth != window.screen.width) {
  // Reload the page without the current scale level
  location.reload(true);
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
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Add an event listener for clicks on the body
document.body.addEventListener("click", function (event) {
  if (
    !modal.contains(event.target) &&
    event.target !== btn &&
    event.target !== btn2
  ) {
    modal.style.display = "none";
  }
});
