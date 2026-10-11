const profileName = "Rex Macartan"
document.getElementById("profile.name").textContent = profileName;
const bio = "Aspiring Software Engineer and Future Mechatronics Engineer."
document.getElementById("bio").textContent = bio;
const profilePic = document.createElement("img");
profilePic.src = "Welcome.png";
profilePic.alt = "Profile Pic";
document.getElementById("top").appendChild(profilePic);