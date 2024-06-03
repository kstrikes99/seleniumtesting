document.addEventListener("DOMContentLoaded", function() {
    // Add specific classes for hover effects
    const page1Link = document.querySelector('nav ul li a[href="page1.html"]');
    if (page1Link) {
        page1Link.classList.add('page1');
    }
    
    const page2Link = document.querySelector('nav ul li a[href="page2.html"]');
    if (page2Link) {
        page2Link.classList.add('page2');
    }
});
