const dogsData = {
    "dog01": {
        name: "小虎",
        mainImg: "./image/dog01_.jpg", // 封面大圖
        album: [
            "./image/dog01_play.jpg",  // 生活照 1
            "./image/dog01_sleep.jpg", // 生活照 2
            "./image/dog01_close.jpg"  // 特寫照
        ],
        age: "3歲",
        personality: "熱情、愛玩水",
        story: "小黑是在校門口被發現的..."
    },
    "dog02": {
        name: "小白",
        mainImg: "./image/dog01_cover.jpg", // 封面大圖
        album: [
            "./image/dog01_play.jpg",  // 生活照 1
            "./image/dog01_sleep.jpg", // 生活照 2
            "./image/dog01_close.jpg"  // 特寫照
        ],
        age: "3歲",
        personality: "熱情、愛玩水",
        story: "小黑是在校門口被發現的..."
    },
    "dog03": {
        name: "咖啡",
        mainImg: "./image/dog01_cover.jpg", // 封面大圖
        album: [
            "./image/dog01_play.jpg",  // 生活照 1
            "./image/dog01_sleep.jpg", // 生活照 2
            "./image/dog01_close.jpg"  // 特寫照
        ],
        age: "3歲",
        personality: "熱情、愛玩水",
        story: "小黑是在校門口被發現的..."
    }
};

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const dogId = urlParams.get('id');
    const dog = dogsData[dogId];

    if (dog) {
        // 填入基本資料
        document.getElementById('dog-name').innerText = dog.name;
        document.getElementById('main-dog-img').src = dog.mainImg;
        document.getElementById('dog-story').innerText = dog.story;

        // 💡 動態生成相簿圖片
        const albumGrid = document.getElementById('album-grid');
        dog.album.forEach(imgUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imgUrl;
            imgElement.classList.add('album-item');
            albumGrid.appendChild(imgElement);
        });
    }
};