document.querySelectorAll('.list a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        animatePage(href);
    });
});

function animatePage(href) {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = href;
    }, 500); }
    function displayMessage(cardType) {
        if (cardType === 'about') {
            alert("About Titans Gym: Titans Gym is a premier fitness center offering state-of-the-art facilities and personalized training programs.");
        } else if (cardType === 'history') {
            alert("History: Established in 2005, Titans Gym has been a pioneer in the fitness industry, catering to fitness enthusiasts of all levels.");
        } else if (cardType === 'popularity') {
            alert("Popularity: Titans Gym has gained immense popularity for its top-notch equipment, expert trainers, and diverse workout programs.");
        }
    }
 