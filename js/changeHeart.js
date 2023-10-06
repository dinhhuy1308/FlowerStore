const heartIcons = document.querySelectorAll('.heart');

heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.getAttribute("src") === "./icons/heart-pink.svg") {
            icon.setAttribute("src", "./icons/heart-full.svg");
        } else {
            icon.setAttribute("src", "./icons/heart-pink.svg");
        }
    });
});



// ================
