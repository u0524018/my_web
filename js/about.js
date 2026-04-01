const rawDogData = [
    {
        name: "流浪的開端", chapter: "當人犬衝突悄悄發生",
        img: "./image/dog01.jpg",
        footprintImg: "./image/001.jpg",
        story: `        大學校園的開放性，讓學術自由流動，也讓無家可歸的生命走了進來。
        流浪犬隻（以下簡稱「浪犬」）因為飢餓而靠近人群，師生或校外人士出於同情而固定餵養，浪犬逐漸把校園視為安全的落腳處。
        善意有時造成了另一種無形的傷害。多數浪犬未結紮，因食物來源充足，使他們在校園內快速繁殖。短短幾個月，原本的一兩隻就成了一大群。
        校園環境衛生、交通安全因此受到影響，狗群間爭吵、追逐機車等情況增加，加上學生、家長與訪客的恐懼，人犬衝突在不知不覺間逐漸升溫。
`
    },
    {
        name: "兩難的僵局", chapter: "無法輕易調和的矛盾",
        img: "./image/dog02.jpg",
        footprintImg: "./image/001.jpg",
        story: `        過去，校方為了減少衝突，只能定期委請動保處捕捉浪犬並送往收容所。但結果卻比想像中更殘酷。
        被捕捉的往往是親人、親狗、最容易接近的浪犬；真正具有攻擊性、警戒心強、不易捕捉的浪犬反而繼續留在校園。更令人無奈的是 ― 校外浪犬數量龐大，校內剛被捕捉走一批，過沒多久，又有新的狗群闖入。
        縱使投入更多的人力與物力，捕捉再捕捉，校園中卻依然充斥浪犬，問題始終無法解決。此外，浪犬進入收容所後，幾乎逃不過安樂死的命運。這不僅違背了動物保護與尊重生命的理念，讓許多同學無法忍受，向校方提出抗議與質疑。
即便動保法修正後，原則上不再施行安樂死，但在過度擁擠、資源匱乏的收容所裡等待死亡，是否是另一種殘忍？
`
    },
    {
        name: "帶著信念", chapter: "一同溫柔前行",
        img: "./image/dog03.jpg",
        footprintImg: "",
        story: `        正因如此，有一群學生選擇勇敢面對、積極籌組，他們用實際行動回應困境，用耐心與知識取代衝突與暴力，於是 ― 動物保護社誕生了。
        社團推動「結紮代替撲殺」、「不要隨意餵養浪犬」等理念，多次參訪收容所，向專業人士學習，建立正確動保知識。
並開始：
    ．進行犬隻分類與族群管理
    ．鼓勵並協助民眾認養友善浪犬
    ．必要時驅離攻擊性或高風險犬隻
    ．建立負責、有制度的照護模式
        一步一步地，用更科學、更溫柔、更負責的方法，試著解決這個已困擾校園多年的問題。`
    },
    {
        name: "有限的資源", chapter: "人力與物力已經吃緊",
        img: "./image/dog04.jpg",
        footprintImg: "./image/002.jpg",
        story: `        因為學校補助經費有限，目前透過社團撰寫計畫書向天河基金會品格教育推廣計畫申請補助，及公眾愛心捐助物資營運社團。
        隨著犬隻年紀漸長，逐漸泛白的瞳孔、老化的關節等等慢性病的日常保養與突發醫療費用都是社團沉重的負擔。
        因募集的資源有限，如有無法負擔的醫療項目，社團會以專案方式公開於社群平台，透明地向師生、社會群眾集資救助。
        目前在人力與物力相當吃緊的情況下，社團成員仍然堅守對校園犬的承諾，每日餵食、水源補給、散步互動、環境清潔、觀察健康狀況、協助就醫、宣導教育、送養媒合等。
        然而，僅憑現有力量，我們無法完善照顧校園犬生活的方方面面，這就是我們最真實的處境。
        正因如此，我們需要更多願意一起守護他們的人，一起加強我們做不到的地方，讓校園犬在老去的路上，不會再度被遺忘。每一個新加入的你，都是我們很重要的力量。
`
    },
    {
        name: "因為有限，所以我們更謹慎", chapter: "",
        img: "./image/dog05.jpg",
        footprintImg: "./image/003.jpg",
        story: `        在人力、物力、照護量能都極度有限的情況下，面對校外湧入的浪犬時，我們都會被一樣的矛盾拉扯，
<span style="text-align:center; font-size:24px;font-weight: bold;display: flex; justify-content: center;">「不能再收一隻嗎？狗狗看起來好可憐」</span>
        社團承諾過的每個生命都必須是「照顧到底」。否則，再多的善意都可能變成下一次遺棄的開始。
        我們必須做出最困難、卻也是最負責的選擇 ― 提供力所能及的協助，而不是逞強接回。
我們會：
        ．提供醫療院所資訊
        ．協助曝光送養資訊
        ．指引正確的處理方式，避免善意變成更大的問題。

我們不是全能的，但我們努力讓每一次介入都充滿善意且負責任。
`
    }];

let currentPage = 0;
let totalPages = 0;
let isTransitioning = false;
let resizeTimer;

// 🧠 分頁處理：增加 isSub 標記
function paginateData(data, limit = 275) {
    const processed = [];
    data.forEach(item => {
        if (item.story.length <= limit) {
            processed.push({ ...item, isSub: false, menuTitle: item.name });
        } else {
            let text = item.story;
            let part = 1;
            while (text.length > 0) {
                const chunk = text.substring(0, limit);
                text = text.substring(limit);
                processed.push({
                    ...item,
                    menuTitle: part > 1 ? `└ PART: ${part}` : item.name,
                    story: chunk + (text.length > 0 ? " ..." : ""),
                    isSub: part > 1 // 💡 標記為子項目
                });
                part++;
            }
        }
    });
    return processed;
}

function init() {
    const book = document.getElementById('book');
    const menu = document.getElementById('menu');
    //const paginatedList = paginateData(rawDogData, 275); // 測試用，設小一點容易看到分頁

    if (window.innerWidth <= 768) {
        paginatedList = paginateData(rawDogData, 500);
    }
    else {
        paginatedList = paginateData(rawDogData, 275);
    }
    // 1. Leaf 0 (封面)
    addLeaf(book, "封面",
        `<h1>🐾 高科大動保社</h1>`,
        `<h3>${paginatedList[0].chapter}</h3><p>${paginatedList[0].story}</p>`,
        true, false, false);

    // 2. 內容 Leaf
    for (let i = 0; i < paginatedList.length; i++) {
        const dog = paginatedList[i];
        const isLast = (i === paginatedList.length - 1);

        // 圖片判斷
        const imageHTML = dog.isSub
            ? `<div class="footprint-container"><img src="${dog.footprintImg}"></div>`
            : `<h3>${dog.name}</h3><div class="photo-frame"><img src="${dog.img}"></div>`;

        // 背面文字
        let backHTML = isLast ? `<h1>感謝觀看</h1>` : `<h3>${paginatedList[i + 1].chapter}</h3><p>${paginatedList[i + 1].story}</p>`;

        addLeaf(book, dog.menuTitle, imageHTML, backHTML, false, isLast, dog.isSub);
    }

    totalPages = document.querySelectorAll('.leaf').length;
    updateUI(0);

    book.addEventListener('wheel', (e) => {

        if (window.innerWidth <= 768) {
            return; // 手機版直接跳出，交給瀏覽器原生捲動
        }

        e.preventDefault();
        if (isTransitioning) return;

        if (e.deltaY > 0)
            jump(currentPage + 1);
        else
            jump(currentPage - 1);

        isTransitioning = true;
        setTimeout(() => isTransitioning = false, 800);
    }, { passive: false });
}

function addLeaf(parent, title, frontHTML, backHTML, isCover, isLast, isSub) {
    const index = parent.children.length;
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.zIndex = 50 - index;

    leaf.innerHTML = `
            <div class="p-front ${isCover ? 'is-cover' : ''}" onclick="jump(${index + 1})">${frontHTML}</div>
            <div class="p-back ${isLast ? 'is-backcover' : ''}" onclick="jump(${index})">${backHTML}</div>
        `;
    parent.appendChild(leaf);

    // 💡 建立目錄連結，加入 is-sub class
    const link = document.createElement('div');
    link.className = `nav-link ${isSub ? 'is-sub' : ''}`;
    link.innerText = title;
    link.id = `link-${index}`;
    link.onclick = () => jump(index);
    document.getElementById('menu').appendChild(link);
}

function jump(index) {
    if (index < 0 || index > totalPages) return;
    if (window.innerWidth <= 768) return;
    currentPage = index;
    const book = document.getElementById('book');
    const leaves = document.querySelectorAll('.leaf');
    if (index > 0) book.classList.add('is-open'); else book.classList.remove('is-open');
    leaves.forEach((leaf, i) => {
        if (i < index) { leaf.classList.add('flipped'); setTimeout(() => leaf.style.zIndex = 100 + i, 300); }
        else { leaf.classList.remove('flipped'); setTimeout(() => leaf.style.zIndex = 50 - i, 300); }
    });
    updateUI(index);
}

function updateUI(index) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const active = document.getElementById(`link-${index}`);
    if (active) active.classList.add('active');
}

document.addEventListener('DOMContentLoaded', init);


//修改解析度時動作
window.addEventListener('resize', () => {
    // 💡 使用 debounce 技術，防止縮放時每秒執行幾百次導致電腦卡頓
    const book = document.getElementById('book');
    const menu = document.getElementById('menu');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log("偵測到解析度改變，重新初始化...");
        menu.innerHTML = '';
        book.innerHTML = '';
        // 1. 重新抓取當前的螢幕寬度判斷
        // 2. 重新計算書本高度或重置 3D 狀態
        init();

        //手機版的若是原先書本處於開啟狀態整個畫面會跑掉 故去掉開啟狀態的class
        if (window.innerWidth <= 768) {
            book.classList.remove('is-open');
            //book.onclick = null;
        };
    }, 100);
});

// about.js 底部修正

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebarContainer');

    // 1. 手機版按鈕點擊事件
    if (btn && sidebar) {
        btn.addEventListener('click', function () {
            sidebar.classList.toggle('is-active');
            // 切換按鈕文字或圖標
            btn.innerText = sidebar.classList.contains('is-active') ? '✕' : '📖';
        });
    }

    // 2. 監聽選單內的點擊 (事件代理)
    // 當點擊 nav-link 時，自動關閉手機選單
    if (sidebar) {
        sidebar.addEventListener('click', function (e) {
            if (e.target.classList.contains('nav-link')) {
                sidebar.classList.remove('is-active');
                if (btn) btn.innerText = '📖';

                // 如果在手機版點擊，因為是垂直排列，我們可以滾動到對應頁面
                if (window.innerWidth <= 768) {
                    
                    const index = e.target.id.replace('link-', '');
                    const targetLeaf = document.querySelectorAll('.leaf')[index];
                    
                    const active = document.getElementById(`link-${index}`);
                    //搜尋所有帶有nav-link的class 並將所有目錄的active取消
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

                    
                    //將點擊的選項加上active
                    if (active) active.classList.add('active');



                    if (targetLeaf) {
                        targetLeaf.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    }
});