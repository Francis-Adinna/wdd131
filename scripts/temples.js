const navBar = document.querySelector("#navBar");
const hamBtn = document.querySelector("#menuBtn");

hamBtn.addEventListener("click", ()=>{
    navBar.classList.toggle("show");
    hamBtn.classList.toggle("show");
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastmodified").textContent = `Last Modified on: ${lastModified}`;