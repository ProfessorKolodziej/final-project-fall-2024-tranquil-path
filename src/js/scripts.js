// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Navigation between screens

// JavaScript for breathing exercise
document.addEventListener("DOMContentLoaded", () => {
    const startScreen = document.querySelector("#start-screen");
    const stage1 = document.querySelector("#stage1");
    const startButton = document.querySelector(".btn_start");

    // Click botton to stage 1
    startButton.addEventListener("click", () => {
        startScreen.style.display = "none";
        stage1.style.display = "block";
        startBreathingExercise();
    });

    function startBreathingExercise() {
        let breathCount = 0;
        const maxBreaths = 10;
        const progressBar = document.querySelector("#number");
        const counter = document.querySelector("#shuzi");
        const bubble = document.querySelector("#bubble");
        const nextButton = document.querySelector("#dn");

        counter.textContent = `${breathCount}/${maxBreaths}`;

        const interval = setInterval(() => {
            breathCount++;
            const progressWidth = (breathCount / maxBreaths) * 300; // 最大宽度 300px
            progressBar.style.width = `${progressWidth}px`;
            counter.textContent = `${breathCount}/${maxBreaths}`;

            if (breathCount >= maxBreaths) {
                clearInterval(interval);
                bubble.style.animation = "none";
                nextButton.className = "next";
                nextButton.style.display = "inline-block";
            }
        }, 5000);
    }
});