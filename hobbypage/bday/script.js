const countdown = document.getElementById('countdown');
const message = document.getElementById('message');
const wish = document.getElementById('wish');
const photo = document.getElementById('photo');

const soundEffect = document.getElementById('sound-effect');

function updateCountdown() {
  const now = new Date();
  const birthday = new Date('2023-06-30');
  const difference = birthday - now;

  if (difference < 0) {
    message.innerHTML = '';
    countdown.innerHTML = '';
    wish.innerHTML = 'Dear Deepak,<br><br>Happy Birthday!<br><br>On this special day, I wanted to wish you a very happy birthday and let you know how much you mean to me. You are an amazing person, and I feel lucky to have you in my life.';
    soundEffect.play();
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdown.innerHTML = `
    <span class="countdown-item">${days}d</span><br>
    <span class="countdown-item">${hours}h</span><br>
    <span class="countdown-item">${minutes}m</span><br>
    <span class="countdown-item">${seconds}s</span><br>
  `;
}

setInterval(updateCountdown, 1000);
