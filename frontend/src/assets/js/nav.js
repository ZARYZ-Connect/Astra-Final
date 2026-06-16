/* SHARED NAV + SCROLL SCRIPTS - included on every page */

// Multi-path robust component loader trying candidates in order of preference
async function fetchComponent(fileName) {
  const candidates = [
    `components/${fileName}`,                 // 1. Direct relative path (works for local testing / file server in pages/)
    `pages/components/${fileName}`,           // 2. Relative to root (works for web server started in src/ or clean Nginx routing)
    `/pages/components/${fileName}`,          // 3. Absolute from root (works for Nginx clean routing)
    `/components/${fileName}`                 // 4. Direct absolute fallback
  ];

  for (const path of candidates) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        return await response.text();
      }
    } catch (e) {
      // Continue to next path
    }
  }
  throw new Error(`Could not load component ${fileName} from any candidate path.`);
}

// Function to automatically highlight active navigation links
function highlightActiveLinks() {
  const currentPath = window.location.pathname;
  let currentPageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  
  if (!currentPageName || currentPageName === '/') {
    currentPageName = 'index.html';
  }
  
  // Support clean URL routing mapped in Nginx
  if (currentPageName === 'about') currentPageName = 'about.html';
  if (currentPageName === 'products') currentPageName = 'products.html';
  if (currentPageName === 'solutions') currentPageName = 'solutions.html';
  
  const links = document.querySelectorAll('#navbar a, #mobileMenu a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Define <header-component>
class HeaderComponent extends HTMLElement {
  async connectedCallback() {
    try {
      const html = await fetchComponent('header.html');
      this.innerHTML = html;
      highlightActiveLinks();
    } catch (err) {
      console.error('Failed to load header component:', err);
    }
  }
}
customElements.define('header-component', HeaderComponent);

// Define <footer-component>
class FooterComponent extends HTMLElement {
  async connectedCallback() {
    try {
      const html = await fetchComponent('footer.html');
      this.innerHTML = html;
      
      const yearEl = this.querySelector('#footerYear');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    } catch (err) {
      console.error('Failed to load footer component:', err);
    }
  }
}
customElements.define('footer-component', FooterComponent);

// Event delegation for mobile menu opening/closing
document.addEventListener('click', (e) => {
  const mobileMenu = document.getElementById('mobileMenu');
  if (!mobileMenu) return;

  if (e.target.closest('#hamburger')) {
    mobileMenu.classList.add('open');
  } else if (e.target.closest('#mobileClose')) {
    mobileMenu.classList.remove('open');
  } else if (e.target.closest('#mobileMenu a')) {
    mobileMenu.classList.remove('open');
  }
});

// Event delegation for Back to Top click
document.addEventListener('click', (e) => {
  if (e.target.closest('#backTop')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// Nav scroll and back-to-top button dynamic visibility
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  if (backTop) {
    backTop.classList.toggle('show', window.scrollY > 400);
  }
});

// Reveal on scroll using IntersectionObserver
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
}
