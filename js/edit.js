// pullForm

const form = document.getElementById("edit-form");
console.log(form);

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
  window.location.href = "index.html";
});

// endPullForm

const updatedProfile = JSON.parse(localStorage.getItem("profile"));
console.log(updatedProfile);
document.getElementById("logo").innerHTML = updatedProfile.logo;
