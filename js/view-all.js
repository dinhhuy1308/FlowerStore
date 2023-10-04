const viewAllTrending = () => {
    let cards = document.querySelectorAll('.trending-item');
    let showMoreButton = document.getElementById('view-all-trending');

    let cardsToShow = 4;
    let displayedCards = 4;

    for (let i = cardsToShow; i < displayedCards + cardsToShow; i++) {
        cards[i].classList.remove('hide');
    }
    displayedCards += cardsToShow;

    // Ẩn nút "Xem thêm" khi đã hiển thị tất cả card
    if (displayedCards >= cards.length) {
        showMoreButton.style.display = 'none';
    }
}

const viewAllSelling = () => {
    const cards = document.querySelectorAll('.selling-item');
    const showMoreButton = document.getElementById('view-all-selling');

    let cardsToShow = 2;
    let displayedCards = 2;

    for (let i = cardsToShow; i < cardsToShow + displayedCards; i++) {
        cards[i].classList.remove('hide');
    }
    displayedCards += cardsToShow;

    // Ẩn nút "Xem thêm" khi đã hiển thị tất cả card
    if (displayedCards >= cards.length) {
        showMoreButton.style.display = 'none';
    }
}

const viewAllBlog = () => {
    const cards = document.querySelectorAll('.blog-item');
    const showMoreButton = document.getElementById('view-all-blog');

    let cardsToShow = 2;
    let displayedCards = 2;

    for (let i = cardsToShow; i < cardsToShow + displayedCards; i++) {
        cards[i].classList.remove('hide');
    }
    displayedCards += cardsToShow;

    // Ẩn nút "Xem thêm" khi đã hiển thị tất cả card
    if (displayedCards >= cards.length) {
        showMoreButton.style.display = 'none';
    }
}

// Xử lý nút Read more
const toggleReadMore = (colNumber) => {
    let dots = document.getElementById("dots" + colNumber);
    let moreText = document.getElementById("more" + colNumber);
    let btnText = document.getElementById("btnReadMoreBlog" + colNumber);


    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


