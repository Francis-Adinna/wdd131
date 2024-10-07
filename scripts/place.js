const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastmodified").textContent = `Last Modified on: ${lastModified}`;



const temp = 32; 
const windSpeed = 10; // mph (change to match your scenario)
const unit = 'F'; // Change to 'C' for Celsius if needed

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed, unit = 'F') {
return unit === 'F' 
    ? 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)
    : 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Function to determine if wind chill calculation is viable
function isWindChillViable(temp, windSpeed, unit) {
if (unit === 'F') {
    return temp <= 50 && windSpeed > 3;
} else if (unit === 'C') {
    return temp <= 10 && windSpeed > 4.8;
}
return false;
}

// Function to update the weather section with wind chill or "N/A"
function displayWindChill() {
const windChillElement = document.getElementById('windChill');
if (isWindChillViable(temp, windSpeed, unit)) {
    const windChill = calculateWindChill(temp, windSpeed, unit);
    windChillElement.textContent = windChill.toFixed(2) + (unit === 'F' ? ' °F' : ' °C');
} else {
    windChillElement.textContent = 'N/A';
}
}

// Call the function when the page loads
window.onload = displayWindChill;

