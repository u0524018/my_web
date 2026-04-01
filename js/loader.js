async function loadLayout() {
    // 1. 同時載入 Header 和 Footer
    const [headerRes, footerRes] = await Promise.all([
        fetch('./components/header.html'),
        fetch('./components/footer.html')
    ]);

    const headerHTML = await headerRes.text();
    const footerHTML = await footerRes.text();

    // 2. 塞進頁面
    if (document.getElementById('header-placeholder')) {
        document.getElementById('header-placeholder').innerHTML = headerHTML;
    }
    if (document.getElementById('footer-placeholder')) {
        document.getElementById('footer-placeholder').innerHTML = footerHTML;
    }

    // 💡 關鍵：載入完後才執行 Header 的 JS 邏輯（如手機版選單）
    initHeaderJS();
}

function initHeaderJS() {
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.querySelector('.header__nav-list').classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', loadLayout);


window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.innerWidth > 768) {
        if (window.scrollY > 50) {
            // 捲動後的「毛玻璃」狀態
            // 使用帶有透明度的白色背景 (0.7)
            header.classList.replace('header__misty', 'header__glass-effect')


        }
        else {
            // 回到頂部的「漸層透明」狀態
            header.classList.replace('header__glass-effect', 'header__misty')
        }
    } else {
        // 💡 手機版：強制維持白色樣式
        header.classList.remove('transparent');
        header.classList.add('sticky');

    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.header__nav-list');

    // 💡 Debug 小撇步：如果沒反應，可以在這裡 console.log 看看有沒有抓到
    // console.log(menuToggle, navList);

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function (e) {
            e.preventDefault(); // 預防預設行為
            navList.classList.toggle('active');
            console.log('選單狀態：', navList.classList.contains('active'));
        });
    }
});


