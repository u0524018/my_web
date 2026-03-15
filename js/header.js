window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.innerWidth > 768) {
        if (window.scrollY > 50) {
            // 捲動後的「毛玻璃」狀態
            // 使用帶有透明度的白色背景 (0.7)
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            header.style.backdropFilter = 'blur(7px) saturate(180%)';
            header.style.webkitBackdropFilter = 'blur(7px) saturate(180%)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';

            header.style.padding = '12px 0'; // 捲動後稍微縮窄，更有精緻感
            header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)';
        } else {
            // 回到頂部的「漸層透明」狀態
            //header.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%';
            header.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), transparent)';
            //header.style.backgroundColor = 'transparent';
            header.style.backdropFilter = 'blur(0px)';
            header.style.webkitBackdropFilter = 'blur(0px)';
            header.style.boxShadow = 'none';

            header.style.padding = '20px 0';
            header.style.borderBottom = 'none';
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