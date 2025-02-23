document.addEventListener('DOMContentLoaded', function() {
    const toggleBlurBtn = document.getElementById('toggleBlurBtn');
    const stylesheet = document.getElementById('stylesheet');

    // Check localStorage for the user's preference
    const userPreference = localStorage.getItem('stylesheetPreference');
    if (userPreference) {
        stylesheet.setAttribute('href', userPreference);
    }

    toggleBlurBtn.addEventListener('click', function() {
        const currentHref = stylesheet.getAttribute('href');
        let newHref;
        if (currentHref === 'styles-blur.css') {
            newHref = 'styles-none.css';
        } else {
            newHref = 'styles-blur.css';
        }
        stylesheet.setAttribute('href', newHref);

        // Save the user's preference to localStorage
        localStorage.setItem('stylesheetPreference', newHref);
    });
});

const video = document.getElementById('background-video');
const switcher = document.getElementById('video-switcher');

const videos = [
    { src: 'images/a2.webm', type: 'video/webm' },
    { src: 'images/b.webm', type: 'video/webm' },
    { src: 'images/c.webm', type: 'video/webm' },
    { src: 'images/snow.webm', type: 'video/webm' },
    { src: 'images/snow2.webm', type: 'video/webm' },
    { src: 'images/z.webm', type: 'video/webm' },
    { src: 'images/y.webm', type: 'video/webm' }
];

let currentVideoIndex = localStorage.getItem('lastPlayedVideo') ? parseInt(localStorage.getItem('lastPlayedVideo')) : 0;

// Set initial video based on localStorage or default
video.src = videos[currentVideoIndex].src;
video.type = videos[currentVideoIndex].type;
video.load();
video.play();

switcher.addEventListener('click', () => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    video.pause();
    video.src = ''; // Important for some browsers
    video.src = videos[currentVideoIndex].src;
    video.type = videos[currentVideoIndex].type;
    video.load();
    video.play();
    localStorage.setItem('lastPlayedVideo', currentVideoIndex); // Save to localStorage
});

video.addEventListener('loadeddata', () => {
    localStorage.setItem('lastPlayedVideo', currentVideoIndex);
});
