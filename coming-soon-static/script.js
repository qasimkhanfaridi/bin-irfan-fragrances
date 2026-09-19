// Bin Irfan Fragrance - Interactive Scripts

// 1. Dynamic Countdown Timer (14 days from first load or set date)
const countdownTarget = new Date();
countdownTarget.setDate(countdownTarget.getDate() + 14);
countdownTarget.setHours(20, 0, 0, 0);

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownTarget.getTime() - now;

  if (distance < 0) {
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 2. Image Gallery Switcher
function switchImage(src, button) {
  const preview = document.getElementById('preview-image');
  preview.style.opacity = '0.3';
  
  setTimeout(() => {
    preview.src = src;
    preview.style.opacity = '1';
  }, 200);

  // Update active button state
  document.querySelectorAll('.thumb-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

// 3. VIP Form Handling
const subscribeForm = document.getElementById('subscribe-form');
const formSuccess = document.getElementById('form-success');
const subscriberEmail = document.getElementById('subscriber-email');

if (subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = subscriberEmail.value.trim();
    
    if (email) {
      // Store locally in browser storage
      let list = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
      list.push({ email: email, timestamp: new Date().toISOString() });
      localStorage.setItem('vip_subscribers', JSON.stringify(list));

      // Show success alert
      formSuccess.style.display = 'block';
      subscribeForm.reset();

      // Optionally offer direct WhatsApp VIP community join
      setTimeout(() => {
        const joinWhatsApp = confirm("Thank you for subscribing! Would you also like to join our VIP WhatsApp broadcast for direct launch offers?");
        if (joinWhatsApp) {
          window.open('https://wa.me/923169699892?text=Hi%20Bin%20Irfan%20Fragrance,%20I%20just%20subscribed%20with%20email:%20' + encodeURIComponent(email) + '%20-%20Please%20add%20me%20to%20VIP%20broadcast!', '_blank');
        }
      }, 800);
    }
  });
}

// 4. Update Current Year
document.getElementById('current-year').innerText = new Date().getFullYear();
