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