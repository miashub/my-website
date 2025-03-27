// Sample photo data
const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 2, url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 3, url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 4, url: 'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 5, url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
    { id: 6, url: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }
];

// DOM elements
const photoContainer = document.getElementById('photo-container');
const newsletterForm = document.getElementById('newsletter-form');
const formMessage = document.getElementById('form-message');
const lastUpdated = document.getElementById('last-updated');

// Initialize the page
function init() {
    loadPhotos();
    setLastUpdated();
    
    // View gallery button click
    document.getElementById('view-gallery').addEventListener('click', () => {
        alert('In a real website, this would open the gallery page!');
    });
    
    // Newsletter form submission
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formMessage.textContent = 'Thank you for subscribing!';
        formMessage.style.color = 'green';
        newsletterForm.reset();
    });
}

// Load photos into the grid
function loadPhotos() {
    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `<img src="${photo.url}" alt="Sunset photo ${photo.id}">`;
        photoContainer.appendChild(photoCard);
    });
}

// Set last updated time
function setLastUpdated() {
    const now = new Date();
    lastUpdated.textContent = `Last updated: ${now.toLocaleDateString()} at ${now.toLocaleTimeString()}`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);