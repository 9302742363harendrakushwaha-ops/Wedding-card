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

