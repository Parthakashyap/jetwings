window.onload = function() {
    // Navigation script
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            links.forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Add 'active' class to 'Home' link if it corresponds to the current page
    const currentPage = window.location.pathname.split('/').pop(); // Get current page filename
    if (currentPage === 'index.html') {
        document.getElementById('home').classList.add('active');
    }

    // Toggle visibility of navigation links and hamburger menu button
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
    });

    // Infinite horizontal scroll script
    const container = document.querySelector('.recruiters-container');
    const list = document.querySelector('.recruiters-list');
    const items = document.querySelectorAll('.recruiters-list li');

    let scrollPos = 0;

    function scrollLeft() {
        scrollPos -= 5; // Adjust scrolling speed
        if (scrollPos < 0) {
            scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
        requestAnimationFrame(scrollLeft);
    }

    function scrollRight() {
        scrollPos += 5; // Adjust scrolling speed
        if (scrollPos > list.offsetWidth - container.offsetWidth) {
            scrollPos = 0;
        }
        container.scrollLeft = scrollPos;
        requestAnimationFrame(scrollRight);
    }

    container.addEventListener('mouseenter', () => {
        cancelAnimationFrame(scrollLeft);
        cancelAnimationFrame(scrollRight);
    });

    container.addEventListener('mouseleave', () => {
        scrollLeft();
        scrollRight();
    });

    scrollLeft();
    scrollRight();
};
