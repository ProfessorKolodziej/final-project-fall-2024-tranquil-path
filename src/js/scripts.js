// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

// Navigation between screens
function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Placeholder for sound toggle
function toggleSound() {
    const soundBtn = document.querySelector('.sound-toggle button');
    soundBtn.textContent = soundBtn.textContent === '🔊' ? '🔇' : '🔊';
    // Add actual sound toggle logic later
}

// Collect objects in Stage 2
function collectObject(element) {
    element.style.opacity = '0'; // Hide the object when clicked
    // Add logic to update progress and play sound effect later
}