// varibls
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
// end vaibls

// add profile to local

const ff = localStorage.setItem("profile", JSON.stringify(profile));

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

// pullForm

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("edit-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const updatedProfile = {
      logo: document.getElementById("editlogo").value,
      userImage: "./images/5830368875861098035.jpg",
      userName: document.getElementById("editUserName").value,
      userPosetion: document.getElementById("editUserPosetion").value,
      userLearning: document.getElementById("editUserLearning").value,
      userGithup: document.getElementById("editUserGithup").value,
      userGmail: document.getElementById("editUserGmail").value,
      userFacebook: document.getElementById("editUserFacebook").value,
      userWhatsapp: document.getElementById("editUserWhatsapp").value,
    };
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    // window.location.href = "index.html";
  });
});

// endPullForm

const updatedProfile = JSON.parse(localStorage.getItem("profile"));
console.log(updatedProfile);

// start-about
document.getElementById("logo").innerHTML = profile.logo;
document.getElementById("userImage").src = profile.userImage;
document.getElementById("name").innerHTML = profile.userName;
document.getElementById("posetion").innerHTML = profile.userPosetion;
document.getElementById("learning").innerHTML = profile.userLearning;
// end-about
// start-contact
document.getElementById("facebook").href = profile.userFacebook;
document.getElementById("whatsapp").href = profile.userWhatsapp;
document.getElementById("gmail").href = profile.userGmail;
document.getElementById("github").href = profile.userGithup;
// end-contact
