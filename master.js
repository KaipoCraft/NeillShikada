/* Open the sidenav */
function openNav() {
  var menu = document.getElementById("mynavigator");
  //var screen = (document.getElementsByClassName("mother"));
  
  if (window.screen.width <= "600px") {
    menu.style.width = "100%";
  }

  else {
    menu.style.width = "25%";
  }
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mynavigator").style.width = "0";
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

//document.getElementById("mynavigator").style.width = "25%";