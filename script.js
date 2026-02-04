const dot = document.getElementById('dot');
const jumpscare = document.getElementById('jumpscare');
const scream = document.getElementById('scream');
const flash = document.getElementById('flash');

let size = 50;
let growing = true;

// Dot grows every 50ms
const growInterval = setInterval(() => {
    if (growing) {
        size += 10; // grow by 10px
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.top = 300 - size/2 + 'px';
        dot.style.left = 400 - size/2 + 'px';

        // When dot covers the whole screen
        if (size >= 800) {
            triggerJumpscare();
            growing = false;
            clearInterval(growInterval);
        }
    }
}, 50);

function triggerJumpscare() {
    // Flash screen
    flash.style.opacity = 1;
    // Show scary image
    jumpscare.style.display = 'block';
    // Play scream
    scream.play();
    
    // Hide flash after 0.2s
    setTimeout(() => flash.style.opacity = 0, 200);
}
