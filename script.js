const dot = document.getElementById('dot');
const jumpscare = document.getElementById('jumpscare');
const scream = document.getElementById('scream');
const flash = document.getElementById('flash');

let size = 50; // starting size
let growing = true;

// Grow the dot smoothly
const growInterval = setInterval(() => {
    if (growing) {
        size += 5; // slower growth so you can see it
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.top = 300 - size/2 + 'px';
        dot.style.left = 400 - size/2 + 'px';

        if (size >= 800) { // when it covers the screen
            triggerJumpscare();
            growing = false;
            clearInterval(growInterval);
        }
    }
}, 50);

function triggerJumpscare() {
    flash.style.opacity = 1;        // flash
    jumpscare.style.display = 'block'; // show scary image
    scream.play();                   // play sound

    // hide flash quickly
    setTimeout(() => flash.style.opacity = 0, 200);
}
