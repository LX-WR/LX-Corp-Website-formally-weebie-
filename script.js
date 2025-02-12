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


