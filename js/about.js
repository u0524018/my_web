function flipToPage(pageNumber) {
    const container = document.getElementById('book-container');
    const cover = document.getElementById('cover');
    const pages = Array.from(document.querySelectorAll('.flip-page'));

    container.classList.add('is-open');
    cover.classList.add('flipped');
    cover.style.zIndex = 1;
    // 翻開後，封面在左邊，也要稍微往後退
    cover.style.transform = "rotateY(-180deg) translateZ(-1px)";

    pages.forEach((page, index) => {
        const pNum = index + 1;
        if (pNum < pageNumber) {
            page.classList.add('flipped');
            page.style.zIndex = 10 + pNum;
            page.style.transform = "rotateY(-180deg)";
        } else {
            page.classList.remove('flipped');
            page.style.zIndex = 50 - index;
            page.style.transform = "rotateY(0deg)";
        }
    });
    updateNav(pageNumber);
}

function goCover() {
    const container = document.getElementById('book-container');
    const cover = document.getElementById('cover');
    const pages = Array.from(document.querySelectorAll('.flip-page'));
    const reversedPages = [...pages].reverse();

    // --- 關鍵修正 A：讓封面「浮」到最前面 ---
    // 提高 zIndex 的同時，加上 translateZ(1px) 確保它在 3D 空間的最表層
    cover.style.zIndex = 100;
    cover.style.transform = "rotateY(-180deg) translateZ(1px)"; 

    reversedPages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.remove('flipped');
            // 內頁合上時，稍微往後退一點點，避免與封面打架
            const originalIdx = pages.length - index; 
            page.style.zIndex = 50 - originalIdx;
            page.style.transform = "rotateY(0deg) translateZ(-1px)";
        }, index * 100); // 縮短間隔讓動畫更緊湊
    });

    // 最後封面旋轉回來
    setTimeout(() => {
        cover.classList.remove('flipped');
        // 旋轉回來後，移除多餘的位移，恢復正常
        cover.style.transform = "rotateY(0deg)";
        cover.style.zIndex = 110;
        container.classList.remove('is-open');
    }, pages.length * 100 + 200);

    updateNav(0);
}


function updateNav(idx) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach((it, i) => it.classList.toggle('active', i === idx));
}