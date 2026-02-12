const images = [
    {
        src: 'b86a963555d1a0a8b259942c450cc9b7 (1).jpg',
    },
    {
        src: 'kayleigh-harrington-yhn4okt6ci0-unsplash.jpg',
    },
    {
        src: '4aebf25c924cf646a34feaae26b32519.jpg',
    },
    {
        src: 'benjamin-zanatta-qk1hk6R9rIQ-unsplash.jpg',
    }
];

let currentIndex = 0;

const imageDiv = document.getElementById('imageDiv');

function updateContent() {
    imageDiv.style.backgroundImage = `url("${images[currentIndex].src}")`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateContent();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateContent();
});
updateContent();