const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("show");
});
  
   const temples = [
    {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, UT",
    dedicated: "April 6, 1893",
    area: 382207,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Jordan River Utah Temple",
    location: "South Jordan, UT",
    dedicated: "November 16, 1981",
    area: 148236,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-main.jpg"
  },
  {
    templeName: "Taylorsville Utah Temple",
    location: "Taylorsville, UT",
    dedicated: "June 2, 2024",
    area: 73492,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/taylorsville-utah-temple/taylorsville-utah-temple-44959-main.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, UT",
    dedicated: "January 8, 1995",
    area: 104000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
  },  
  {
    templeName: "Draper Utah Temple",
    location: "Draper, UT",
    dedicated: "March 20,2009",
    area: 58300,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/draper-utah-temple/draper-utah-temple-38937-main.jpg"
  },
  {
    templeName: "Orem Utah Temple",
    location: "Orem, UT",
    dedicated: "January 21, 2024",
    area: 71998,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-39549-main.jpg"
  },
  {
    templeName: "Saratoga Springs Utah Temple",
    location: "Saratoga Springs, UT",
    dedicated: "August 13,2023",
    area: 97836,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872-main.jpg"
  },
  {
    templeName:"Okinawa Japan Temple",
    location: "Okinawa, Japan",
    dedicated: "November 12,2023",
    area: 12437,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg"
  },
  {
    templeName: "Orlando Florida Temple",
    location: "Orlando, FL",
    dedicated: "October 9, 1994",
    area: 97836,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51938-main.jpg"
  }
   ]
   
   createTemplecard();

   function createTemplecard() {
    temples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class ="label" >Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class ="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class ="label">Size:</span> ${temple.area} sq ft`;
      img.setAttribute("src", temple.imageUrl);
      img.setAttribute("alt" , `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");

      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".res-grid").appendChild(card);
    });
  }
   
        
