// startScrollFunctions
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function scrollWin() {
  setTimeout(function () {
    window.scrollBy(0, -90);
  }, 500);
}
// endtScrollFunctions

// gitInfo
const updatedProfile = JSON.parse(localStorage.getItem("profile"));
console.log(updatedProfile);

// start-about
document.getElementById("logo").innerHTML = updatedProfile.logo;
document.getElementById("userImage").src = updatedProfile.userImage;
document.getElementById("name").innerHTML = updatedProfile.userName;
document.getElementById("posetion").innerHTML = updatedProfile.userPosetion;
document.getElementById("learning").innerHTML = updatedProfile.userLearning;
// end-about

// start-contact
document.getElementById("facebook").href = updatedProfile.userFacebook;
document.getElementById("whatsapp").href = updatedProfile.userWhatsapp;
document.getElementById("gmail").href = updatedProfile.userGmail;
document.getElementById("github").href = updatedProfile.userGithup;
// end-contact



// resetLocalStorage

setTimeout(function () {
  const profile = {
    logo: " logo",
    userImage: "./images/5830368875861098035.jpg",
    userName: "omar abdullah",
    userPosetion: "frontEnd & Founder, Example",
    userLearning: "elazhar University",
    userGithup: "https://github.com/El-Coach",
    userGmail: "oe61031@gmail.com",
    userFacebook: "https://facebook.com",
    userWhatsapp: "https://wa.me/201091921248",
  };

  localStorage.setItem("profile", JSON.stringify(profile));
}, 1000);
