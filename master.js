/* Index Slideshow */

var slideIndex = 0;
  showSlides();
            
    function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 6000); // Change image every 4 seconds
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