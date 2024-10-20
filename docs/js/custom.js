const getRandomImage = (size) => Math.floor(Math.random() * (7));

// Function to change the body's background
const changeBackground = () => {
    document.body.style.backgroundImage = `url(/images/unsplash_${getRandomImage()}.jpg)`;
};

// Change background every 10 seconds
const startBackgroundChange = (interval) => {
    setInterval(changeBackground, interval);
};

changeBackground()
// Initialize the background change
startBackgroundChange(5000); // 5 seconds