const jumpscare = document.getElementById('jumpscare');
const scream = document.getElementById('scream');

// Random jumpscare timer between 5 and 15 seconds
function randomJumpscare() {
    const time = Math.random() * 10000 + 5000;
    setTimeout(() => {
        jumpscare.style.display = 'block';
        scream.play();
        // Hide jumpscare after 1 second
        setTimeout(() => jumpscare.style.display = 'none', 1000);
        randomJumpscare(); // Repeat
    }, time);
}

randomJumpscare();
