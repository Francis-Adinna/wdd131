document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            

            let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
            
            reviewCount += 1;
            
            localStorage.setItem('reviewCount', reviewCount);

            window.location.href = 'response.html';
        });
    }

    // 2. Logic for the review page
    const displayCounts = document.getElementById('response-id');
    if (displayCounts) {
        // If the review-count element exists, you're on the review page
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        displayCounts.textContent = `You have submitted ${reviewCount} review(s).`;

    }
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastmodified").textContent = `Last Modified on: ${lastModified}`;

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

const sliderInner = document.querySelector('.slider-inner');
const images = sliderInner.querySelectorAll('img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

const slideImage = (index) => {
 images.forEach((image, i) => {
    image.style.opacity = i === index ? 1:0
 })
  currentIndex = index;
};

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    slideImage(currentIndex + 1);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    slideImage(currentIndex - 1);
  }
});


setInterval(() => {
  if (currentIndex < images.length - 1) {
    slideImage(currentIndex + 1);
  } else {
    slideImage(0);
  }
}, 5000); 

