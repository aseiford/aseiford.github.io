let isMinimized = false;

// fires when minimize is pressed on window
// or when button is pressed in taskbar
// toggles the display of the bio window
// and the state of the taskbar button
function toggleMinimize() {
  isMinimized = !isMinimized;

  const bio = document.getElementById("bio");
  const taskbarButton = document.getElementById("taskbar-window-button");

  bio.classList.toggle("hidden");
  taskbarButton.classList.toggle("active");
}

// fires when a click occurs on the desktop
// used to deselect the desktop icon
function onDeselect() {
  const icon = document.getElementById("desktop-icon");
  icon.classList.remove("blue-overlay");
}

// fires when the bio window is closed
// hides display of the bio window and taskbar button
function onClose() {
  const bio = document.getElementById("bio");
  const taskbarButton = document.getElementById("taskbar-window-button");

  taskbarButton.classList.add("hidden");
  bio.classList.add("hidden");
}

// fires when a user does not double click on the desktop icon
// sets the desktop icon into a highlighted state
function onSingleClick() {
  const icon = document.getElementById("desktop-icon");
  icon.classList.add("blue-overlay");
}

// fires when a user double clicks on the desktop icon
// removes hidden classes from the bio + taskbar button
// removes blue overlay from the desktop icon
// and sets the taskbar button to active
function onOpen() {
  isMinimized = false;

  const bio = document.getElementById("bio");
  const icon = document.getElementById("desktop-icon");
  const taskbarButton = document.getElementById("taskbar-window-button");

  bio.classList.remove("hidden");
  icon.classList.remove("blue-overlay");
  taskbarButton.classList.remove("hidden");
  taskbarButton.classList.add("active");
}

// fired when a user presses either of the menu buttons
function onPressExternalLink(website) {
  if (website === "linkedin") {
    window.open("https://www.linkedin.com/in/seiford", "_blank").focus();
  } else if (website === "github") {
    window.open("https://www.github.com/aseiford", "_blank").focus();
  }
}

// completely necessary clock functionality
function updateClock() {
  const clock = document.getElementById("clock");
  clock.innerHTML = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}
window.addEventListener("load", () => {
  updateClock(); // sets clock value on first load
  setInterval(function () {
    updateClock();
  }, 5000);
});
