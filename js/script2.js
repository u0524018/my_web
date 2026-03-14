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
    let counter = 0;

    let index = 0;
    const cardsToShow = 3; // 每次顯示幾張
    const totalCards = cards.length;
    const maxIndex = totalCards - cardsToShow; // 最大可滑動索引


    function getSlideWidth() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 20; // 必須跟 CSS 的 gap 一樣
        return cardWidth + gap;
    }

    nextBtn.addEventListener('click', () => {
        // 總共 11 隻，一次看 3 隻，最多只能點 8 下
        if (counter < cards.length - 3) {
            counter++;
            const amountToMove = getSlideWidth() * counter;
            track.style.transform = `translateX(-${amountToMove}px)`;
        }
    });
    prevBtn.addEventListener('click', () => {
        if (counter > 0) {
            counter--;
            const amountToMove = getSlideWidth() * counter;
            track.style.transform = `translateX(-${amountToMove}px)`;
        }
    });
    function updateSlide() {
        // 計算移動百分比：每一格佔 1/3
        const cardWidth = 100 / cardsToShow;
        // 加上一點間距修正 (CSS 裡用了 gap，這裡最簡單的方式是算比例)
        const moveDistance = index * (100 / cardsToShow);
        track.style.transform = `translateX(-${moveDistance}%)`;
    }

    nextBtn.addEventListener('click', () => {
        if (index < maxIndex) {
            index++;
        } else {
            index = 0; // 到底了就回第一張
        }
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = maxIndex; // 點最左邊就跳到最後一組
        }
        updateSlide();
    });
});
