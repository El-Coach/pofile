// varibls
var logo = "<h1>logo</h>";
var userImage = "./images/5830368875861098035.jpg";
var userName = "omar abdullah";
var userPosetion = "frontEnd & Founder, Example";
var userLearning = "elazhar University";
var userGithup = "https://github.com/El-Coach";
var userGmail = "oe61031@gmail.com";
var userFacebook = "https://facebook.com";
var userWhatsapp = "https://wa.me/201091921248";

// end vaibls

// topFunction
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollWin() {
  setTimeout(function () {
    window.scrollBy(0, -90);
  }, 500);
}

// stat-about
document.getElementById("logo").innerHTML = logo;
document.getElementById("userImage").src = userImage;
document.getElementById("name").innerHTML = userName;
document.getElementById("posetion").innerHTML = userPosetion;
document.getElementById("learning").innerHTML = userLearning;
// end-about
// start-contact
document.getElementById("facebook").href = userFacebook;
document.getElementById("whatsapp").href = userWhatsapp;
document.getElementById("gmail").href = userGmail;
document.getElementById("github").href = userGithup;
// end-contact
