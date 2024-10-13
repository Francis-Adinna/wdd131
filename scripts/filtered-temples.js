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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-thumb.jpg"    
    },
    {
        templeName: "Austin Texas",
        location: "Texas, United State",
        dedicated: "2014, August, 17",
        area: 30000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/austin-texas-temple/austin-texas-temple-40361.jpg"
    },
    {
        templeName: "Bengaluru India",
        location: "Bengaluru, India",
        dedicated: "2020, December, 2",
        area: 38670,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/bengaluru-india-temple/bengaluru-india-temple-7886-thumb.jpg"
    },
    {
        templeName: "Boise Idaha",
        location: "Boise, United State",
        dedicated: "1982, December, 18",
        area: 35868,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-52951-thumb.jpg"
    },
    {
        templeName: "Paris France",
        location: "Boulevard Saint Antoine, Le Chesnay, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-20907-thumb.jpg"
    },

];

const templeContainer = document.getElementById('temple-container');

const displayTemples = ((filteredTemples) => {
    templeContainer.innerHTML =" ";

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple-card');
    
        templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location: </strong>${temple.location}</p>
        <p><strong>Dedicated: </strong>${temple.dedicated}</p>
        <p><strong>Size: </strong>${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" width="400" height="250" loading="lazy">
        `;
    
        templeContainer.appendChild(templeCard);
    });
})

displayTemples(temples);

displayTemples(temples);


const filterOldTemples = () => temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
});

const filterNewTemples = () => temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
});

const filterLargeTemples = () => temples.filter(temple => temple.area > 90000);

const filterSmallTemples = () => temples.filter(temple => temple.area < 10000);


document.getElementById('home').addEventListener('click', () => displayTemples(temples));
document.getElementById('old').addEventListener('click', () => displayTemples(filterOldTemples()));
document.getElementById('new').addEventListener('click', () => displayTemples(filterNewTemples()));
document.getElementById('large').addEventListener('click', () => displayTemples(filterLargeTemples()));
document.getElementById('small').addEventListener('click', () => displayTemples(filterSmallTemples()));