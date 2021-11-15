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