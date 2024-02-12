// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbarpop").style.top = "0";
  } else {
    document.getElementById("navbarpop").style.top = "-50px";
  }
}

/*
function songreader(){
	var son1 = document.getElementById("son1");
	son1.play();
};
*/

function initElement()
{
  var p = document.getElementById("bouton");
  p.onclick = showAlert;
};

function showAlert()
{
  var son1 = document.getElementById("son1");
  son1.play();
};





