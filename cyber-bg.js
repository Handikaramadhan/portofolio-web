/* 
 * Cyber Rain Animation
 * Creates a Matrix-like digital rain effect
 */

const canvas = document.getElementById('cyber-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let columns;
const fontSize = 14;
const drops = [];

// Characters to use (Matrix style + some cyber symbols)
const chars = "0101010101ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()_+=-{}[]|;:,.<>?/`~";

function init() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    columns = Math.floor(width / fontSize);

    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Start above the screen randomly
    }
}

function draw() {
    // Semi-transparent black background to create trail effect
    ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#00ff41'; // Neon Green
    ctx.font = fontSize + 'px "Fira Code", monospace';

    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly or move down
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Handle window resize
window.addEventListener('resize', init);

// Start animation
init();
setInterval(draw, 33);
