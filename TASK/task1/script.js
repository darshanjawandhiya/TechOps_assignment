/* Add the following JavaScript code to your existing script.js */

function updateReviews() {
    const reviewCards = document.querySelectorAll('.review-card');
    const cardHeight = reviewCards[0].offsetHeight;

    reviewCards.forEach((card, index) => {
        const translateY = index < currentReview ? (currentReview - index) * cardHeight : 0;

        card.style.transform = `translateY(${translateY}px)`;
    });
}
