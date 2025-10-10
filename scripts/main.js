// Footer JavaScript for current year and last modified
        document.getElementById('currentyear').textContent = new Date().getFullYear();
        document.getElementById('lastmodified').textContent = "Last Modified: " + document.lastModified;

// Product Array
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

// Function to populate the Product Name select element
function populateProductSelect() {
    const selectElement = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');
        // The display text is the product name (e.g., "flux capacitor")
        option.textContent = product.name.toUpperCase();
        // The value attribute is the product ID (e.g., "fc-1888")
        option.value = product.id; 
        selectElement.appendChild(option);
    });
}

populateProductSelect();