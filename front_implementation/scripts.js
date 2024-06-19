document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".drop-button");
    const menu = document.querySelector(".menu");

    // Toggle menu visibility when menu button is clicked
    menuBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Close menu when clicking anywhere outside of the menu
    document.addEventListener("click", function (event) {
        const target = event.target;
        const isClickInsideMenu = menu.contains(target);
        const isClickOnMenuButton = target === menuBtn;

        if (!isClickInsideMenu && !isClickOnMenuButton) {
            menu.style.display = "none";
        }
    });

    const scrollButton = document.getElementById("scrollButton");
    const targetElement = document.querySelector(".search-part");
    scrollButton.addEventListener("click", function () {
        // Calculate the target element's position relative to the viewport
        const targetElementRect = targetElement.getBoundingClientRect();
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const targetOffsetTop = targetElementRect.top + scrollTop;

        // Smooth scroll to the target element
        window.scrollTo({
            top: targetOffsetTop,
            behavior: "smooth",
        });
    });
});

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function currentDiv(n) {
    showDivs((slideIndex = n));
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
