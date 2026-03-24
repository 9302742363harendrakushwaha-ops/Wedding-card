// Countdown Logic
const weddingDate = new Date("April 28, 2026 10:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("mins").innerText = m;
    document.getElementById("secs").innerText = s;

    if (diff < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "Wedding Started!";
    }
}, 1000);

// Modal Functions
function openRSVP() {
    document.getElementById("rsvpModal").style.display = "block";
}

function closeModal() {
    document.getElementById("rsvpModal").style.display = "none";
}

// Close if click outside box
window.onclick = function(event) {
    let modal = document.getElementById("rsvpModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






// Gallery Lightbox Logic
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    lightbox.style.display = "flex";
    img.src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}







const audio = document.getElementById("weddingAudio");
const btn = document.querySelector(".music-control");
const icon = document.getElementById("music-icon");

// Music Toggle Function
function toggleMusic() {
    if (audio.paused) {
        playMusic();
    } else {
        pauseMusic();
    }
}

function playMusic() {
    audio.play().then(() => {
        btn.classList.add("playing");
        icon.innerText = "⏸️";
    }).catch(error => {
        console.log("Playback failed:", error);
    });
}

function pauseMusic() {
    audio.pause();
    btn.classList.remove("playing");
    icon.innerText = "🎵";
}

// Global Interaction: Jab user pehli baar kahin bhi click kare, music activate ho jaye
document.body.addEventListener('click', function() {
    // Agar music pehle se nahi chal raha toh start karein (Optional)
    // audio.play(); 
}, { once: true });
