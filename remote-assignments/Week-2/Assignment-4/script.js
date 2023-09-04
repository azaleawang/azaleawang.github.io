// handle load more button
let loadBtn = document.querySelector(".main__load-btn")
loadBtn.onclick = () => {
    let boxes = document.querySelectorAll(".main__box--hidden");
    boxes.forEach(box => box.style.display = "flex");
    loadBtn.disabled = true;
    loadBtn.style.opacity = 0.5;
    loadBtn.style.cursor = "auto";
};

// handle welcome message clicking
let title = document.querySelector(".header__title");
title.addEventListener("click", () => {
    title.innerText = "Have a Good Time!";
});

// handle to-top btn and show/hide based on scrolling pos
let scrollToTopBtn = document.querySelector(".main__top-btn");
let rootElement = document.documentElement;

function handleScroll() {
    let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (rootElement.scrollTop / scrollTotal > 0) {
        // Show button
        scrollToTopBtn.style.display = "block";
    } else {
        // Hide button
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
