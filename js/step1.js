// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// 呼吸气泡增长动画
breath();
function breath() {
    let num = 0;
    let timeoutId = setInterval(function () {
        const number = document.getElementById("number");
        const shuzi = document.getElementById("shuzi");
        const bubble = document.getElementById("bubble");
        const dn = document.getElementById("dn");
        const style = window.getComputedStyle(number);
        let width = parseInt(style.getPropertyValue("width"));
        width += 30;
        num += 1;
        shuzi.innerHTML = num + "/10";
        if (num >= 10) {
            bubble.style.animation = "none";
            clearInterval(timeoutId);
            timeoutId = null;
            dn.className = "next";
        }
        number.setAttribute("style", `width: ${width}px`);
    }, 5000);
}

// 音乐播放控制
const myAudio = document.getElementById("myAudio");
const controlButton = document.getElementById("controlButton");
let isPlaying = true; // 注意初始状态是 true，因为 audio 是 autoplay 的

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
