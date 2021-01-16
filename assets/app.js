// Variables
const container = document.getElementById('container');
const loader = document.getElementById('loader');
let photosArray = [];

//Unsplash API
const count= 10;
const apiKey = 'UDuQUzfV6Co4Tl1sFgg9BVyDCsiE0fUyhg7tw8Q4WFk';
const secretKey = 'eXA0eZbDKHkVMZUx4Tijoj6rVxeZgC-F0HvGkKqE2OE'
const url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Helper funtion to set attributes on DOM elements
const setAttributes = (element, attributes) => {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
};

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(url);
        photosArray = await response.json();
        console.log(photosArray);
        displayPhotos(photosArray);

    } catch (error) {
        console.log(error);
    }
}

function displayPhotos() {
    photosArray.forEach(photo => {
        // Create a link tag
        const link = document.createElement('a');
        setAttributes(link, {
            href: photo.links.html,
            target: '_blank'
        });

        // Create img tag
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        //Put img inside a tag and then put a inside container
        link.appendChild(img);
        container.appendChild(link);
    });
}

window.addEventListener('scroll', () => {
    console.log('Scrolled');
})

getPhotos();


