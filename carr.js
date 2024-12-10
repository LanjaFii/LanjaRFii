// Liste des images
const images = [
    "img/Lanja/1.png",
    "img/Lanja/2.png",
    "img/Lanja/3.png",
    "img/Lanja/4.png",
    "img/Lanja/5.png",
    "img/Lanja/6.png"
];

let currentIndex = 0;
const imgElement = document.querySelector('.pic-ctn img');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function changeImage(newIndex) {
    
    imgElement.style.opacity = 0;

    setTimeout(() => {
        currentIndex = newIndex;
        
        imgElement.src = images[currentIndex];
        
        imgElement.style.opacity = 1;
    }, 800); 
}

function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;  
    changeImage(nextIndex);
}

function showPrevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    changeImage(prevIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

imgElement.src = images[currentIndex];

