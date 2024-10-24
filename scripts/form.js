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

const select = document.getElementById("choose-product");
console.log(select);
let options = '';

products.forEach((item) =>{
    options += `<option value='${item.id}'>${item.name}</option>`
});

select.innerHTML += options;
// To make my form to be counting how times user client visits a page, i must first prevent the normal form submit defult that takes me to the review.html

const form = document.getElementById("product-form");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // I will now make it redirect me to the review page.
    let reviewCount = localStorage.getItem('reviewCount') ? parseInt(localStorage.getItem('reviewCount')) : 0;
    reviewCount += 1;
    console.log("New Review Count: ", reviewCount);
    // I will now update the local storage with this now value

    localStorage.setItem('reviewCount', reviewCount);


    window.location.href = 'review.html';

});

// Assuming we are now in the review page we will want to now add the counter 


//Let now call the id that will display the review count

document.addEventListener("DOMContentLoaded", function() {
    const displayCounts = document.getElementById('review-count');
    if (displayCounts) {
        let reviewCount = localStorage.getItem('reviewCount') || 0;
        displayCounts.textContent = `You have submitted ${reviewCount} review(s).`;
    } else {
        console.error('Element with id "review-count" not found.');
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastmodified").textContent = `Last Modified on: ${lastModified}`;