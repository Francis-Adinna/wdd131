const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `©${currentYear} 🎖Francis Adinna🎖`;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = `Last modified on: ${lastModified}`;