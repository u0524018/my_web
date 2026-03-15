let currentIndex = 0;
const track = document.getElementById('track');
const slides = document.querySelectorAll('.carousel-slide');

function moveSlide(direction) {
    const totalSlides = slides.length;

    // 計算下一個索引
    currentIndex += direction;

    // 循環處理：如果超過最後一張就回第一張，反之亦然
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // 移動軌道
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}



document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.dog-track');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const cards = document.querySelectorAll('.dog-card');
    const wrapper = document.querySelector('.dog-carousel-wrapper');

    let index = 0;

    function getCardsToShow() {
        return window.innerWidth <= 768 ? 1 : 3;
    }

    function updateSlide() {
        if (window.innerWidth > 768) {
            const cardsToShow = getCardsToShow();
            const percentage = index * (100 / cardsToShow);
            track.style.transform = `translateX(-${percentage}%)`;
        } else {
            // 💡 手機版時，確保 transform 是空的，讓 CSS 接管
            track.style.transform = 'none';
        }
    }

    nextBtn.addEventListener('click', () => {
        const cardsToShow = getCardsToShow();
        const maxIndex = cards.length - cardsToShow; // 動態計算最大索引
        wrapper.scrollBy({ left: wrapper.offsetWidth, behavior: 'smooth' });
        if (index < maxIndex) {
            index++;
        } else {
            index = 0; // 循環回到第一張
        }
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        const cardsToShow = getCardsToShow();
        const maxIndex = cards.length - cardsToShow;
        wrapper.scrollBy({ left: wrapper.offsetWidth, behavior: 'smooth' });
        if (index > 0) {
            index--;
        } else {
            index = maxIndex; // 點最左邊就跳到最後
        }
        updateSlide();
    });

    window.addEventListener('resize', updateSlide);

});
