// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("FrzrTech personal site loaded.");

  const skills = ["HTML", "CSS", "JavaScript", "Python", "Git"];
  const section = document.querySelector("section:nth-of-type(2) ul");

  // Dynamically add extra skill
  const extraSkill = document.createElement("li");
  extraSkill.textContent = "GitHub Pages";
  section.appendChild(extraSkill);
});
