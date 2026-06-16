/* HOME PAGE SCRIPTS */

function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'flex';
}

// Scanning status animation
const status = document.querySelector('.hc-status');
const states = [
  '<span class="hc-pulsar"></span>Scanning…',
  '<span class="hc-pulsar" style="background:#eab308;box-shadow:0 0 6px #eab308"></span>Verifying…',
  '<span class="hc-pulsar" style="background:#22c55e;box-shadow:0 0 6px #22c55e"></span>Access Granted ✓'
];
let si = 0;
setInterval(() => {
  si = (si + 1) % states.length;
  if (status) status.innerHTML = states[si];
}, 2500);