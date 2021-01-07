/* Open the sidenav */
function openNav() {
  document.getElementById("mynavigator").style.width = "25%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mynavigator").style.width = "0";
}

/* Index - Open Home Page Welcome */
function RevealWelcome() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
  } else {
    x.style.display = "none";
  }
}

/* Index - Close Home Page Welcome */
function CloseWelcome() {
  var x = document.getElementById("dropdown");
  if (x.style.display === "inline-block") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-block";
  }
}

/* Resume - Open Accordian */
function OpenAccordian(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("section-show") == -1) {
    x.className += " section-show";
    x.previousElementSibling.className += " section-blue";
  } else {
    x.className = x.className.replace(" section-show", "");
    x.previousElementSibling.className =
    x.previousElementSibling.className.replace(" section-blue", "");
  }
}

/* Contact - Copy to Clipboard */

function CopyNumber() {
  var copyText = document.getElementById("myNumber");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");

  var tooltip = document.getElementById("copyMessage");
  tooltip.innerHTML = "Copied to clipboard!";
}

function outFunc() {
  var tooltip = document.getElementById("copyMessage");
  tooltip.innerHTML = "Copy to clipboard";
}