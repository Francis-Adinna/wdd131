const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];


// To make my form to be counting how times user client visits a page, i must first prevent the normal form submit defult that takes me to the review.html

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("product-form");
    if (form) {
        // If the form exists, you're on the form page
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Retrieve review count from localStorage, or initialize it to 0 if not found
            let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
            
            // Increment the review count
            reviewCount += 1;
            
            // Store the updated count in localStorage
            localStorage.setItem('reviewCount', reviewCount);

            // Redirect to the review page after submitting
            window.location.href = 'review.html';
        });
    }

    // 2. Logic for the review page
    const displayCounts = document.getElementById('review-count');
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

const select = document.getElementById("choose-product");
console.log(select);
let options = '';

products.forEach((item) =>{
    options += `<option value='${item.id}'>${item.name}</option>`
});

select.innerHTML += options;