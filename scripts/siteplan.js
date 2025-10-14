// Footer JavaScript for current year and last modified
        document.getElementById('currentyear').textContent = new Date().getFullYear();
        document.getElementById('lastmodified').textContent = "Last Modified: " + document.lastModified;

// Use a self-contained script to ensure the counter updates immediately on load
        const REVIEW_COUNT_KEY = 'reviewCount';
        let count = localStorage.getItem(REVIEW_COUNT_KEY);
        
        count = count ? parseInt(count) : 0;
        count++; 
        localStorage.setItem(REVIEW_COUNT_KEY, count); 
        
const itineraries = [
    {
        title: "7-Day Tokyo & Kyoto Starter",
        theme: "Fast-Paced Culture Hit",
        cost: "¥7,500/day",
        transport: "Local trains, 1 overnight bus",
        features: ["Tokyo shrines (free)", "Kyoto temples", "Osaka street food"]
    },
    {
        title: "14-Day Honshu Loop",
        theme: "Temples, Nature, and Cities",
        cost: "¥6,000/day",
        transport: "Local trains, Highway buses",
        features: ["Hiroshima peace park", "Miyajima island", "Kanazawa gardens", "Onsen visit"]
    },
    {
        title: "21-Day Deep Dive",
        theme: "Off-the-Beaten-Path Discovery",
        cost: "¥5,500/day",
        transport: "Local passes, cycling",
        features: ["Hokkaido nature trails", "Kyushu onsen towns", "Camping/Hostels"]
    }
];

function setupNavToggle() {
    const navButton = document.getElementById('menu-toggle'); // Select element
    const navLinks = document.getElementById('main-nav');

    
    if (navButton && navLinks) {
        navButton.addEventListener('click', () => { 
            navLinks.classList.toggle('open'); 
        });
    }
}

function renderItineraries() {
    const container = document.getElementById('itinerary-cards');
    if (!container) return; 

    
    itineraries.forEach(item => {
        
        const featuresList = item.features
            .map(feature => `<li>${feature}</li>`)
            .join('');

    
        const cardHTML = `
            <div class="card">
                <h3>${item.title}</h3>
                <p><strong>Theme:</strong> ${item.theme}</p>
                <p class="cost"><strong>Estimated Daily Cost:</strong> ${item.cost}</p>
                <p><strong>Primary Transport:</strong> ${item.transport}</p>
                <h4>Key Highlights:</h4>
                <ul>
                    ${featuresList}
                </ul>
            </div>
        `;
        
        
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

    
    const lazyImages = document.querySelectorAll('.lazy-load-img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src; 
                    image.classList.remove('lazy-load-img');
                    observer.unobserve(image);
                }
            });
        });

        lazyImages.forEach(image => {
            imageObserver.observe(image); 
        });
    } else {
        lazyImages.forEach(image => {
            image.src = image.dataset.src;
        });
    }

function updateFooter() {
    
    const REVIEW_COUNT_KEY = 'reviewCount';
    const reviewCountElement = document.getElementById('review-count');
    
    if (reviewCountElement) {
        let count = localStorage.getItem(REVIEW_COUNT_KEY);
        count = count ? parseInt(count) : 0;
        reviewCountElement.textContent = count;
    }

    document.addEventListener('DOMContentLoaded', () => {
    setupNavToggle();
    renderItineraries();
    lazyLoadImages();
    updateFooter();
});
}