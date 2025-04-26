window.onload = function () {
    let mynum = 0;
    const images = ["./images/xingxing.png", "./images/lingsheng.png"];
    const imageCount = 4;

    function init() {
        const existingImages = document.querySelectorAll(".image-container");
        existingImages.forEach((img) => img.remove());

        for (let i = 0; i < imageCount; i++) {
            createRandomImage();
        }
    }

    function createRandomImage() {
        const container = document.createElement("div");
        container.className = "image-container";

        const randomImage = images[Math.floor(Math.random() * images.length)];

        const img = document.createElement("img");
        img.src = randomImage;
        img.alt = "随机图片";

        container.appendChild(img);

        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 240;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        container.style.left = `${randomX}px`;
        container.style.top = `${randomY}px`;

        container.addEventListener("click", function () {
            const step = document.getElementById("step");
            const next = document.getElementById("next");

            this.remove();
            mynum++;
            if (mynum >= 20) {
                next.className = "next";
                step.innerHTML = 20;
            } else {
                next.className = "next dn";
                step.innerHTML = mynum;
            }
            createRandomImage();
        });

        document.body.appendChild(container);
    }

    // 页面加载完后初始化图片
    init();
    window.addEventListener("resize", function () {
        init();
    });

    // 声音控制按钮
    const myAudio = document.getElementById("myAudio");
    const controlButton = document.getElementById("controlButton");
    let isPlaying = true;

    function togglePlay() {
        if (isPlaying) {
            myAudio.pause();
            controlButton.style.backgroundImage = "url(../images/mute-icon.png)";
        } else {
            myAudio.play();
            controlButton.style.backgroundImage = "url(../images/sound-icon.png)";
        }
        isPlaying = !isPlaying;
    }

    controlButton.addEventListener("click", togglePlay);
};