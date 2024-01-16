let currentReview = 0;

function changeReview(index) {
    currentReview = index - 1;
    updateReviews();
}

function updateReviews() {
    const reviewCards = document.querySelectorAll('.review-card');
    const scrollingSection = document.querySelector('.scrolling-section');
    const cardWidth = reviewCards[4].offsetWidth;
    
    scrollingSection.style.transform = `translateX(${-currentReview * cardWidth}px)`;
}
function enrollNow() {
    alert("Enrollment Successful!");
}