/* PRODUCTS PAGE SCRIPTS */

function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'flex';
}

// Sidebar mobile toggle
const sidebarToggle = document.getElementById('sidebarToggle');
if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
  });
}

// Build Tree Menu Dynamically
document.addEventListener('DOMContentLoaded', () => {
    const sidebarCatContainer = document.querySelector('.sidebar-section');
    if (!sidebarCatContainer) return;

    // Keep the title
    const title = sidebarCatContainer.querySelector('.sidebar-title');
    
    const treeRoot = document.createElement('ul');
    treeRoot.className = 'tree-menu';
    treeRoot.innerHTML = `
        <li class="tree-node open">
            <div class="tree-toggle active" data-cat="all">
                <span class="tree-icon">-</span> Products
            </div>
            <ul class="tree-sub"></ul>
        </li>
    `;
    const rootSub = treeRoot.querySelector('.tree-sub');

    document.querySelectorAll('.cat-section').forEach(section => {
        const catId = section.dataset.category;
        const catName = section.querySelector('.cat-section-label').innerText;
        
        const li = document.createElement('li');
        li.className = 'tree-node';
        
        const toggle = document.createElement('div');
        toggle.className = 'tree-toggle';
        toggle.dataset.cat = catId;
        toggle.innerHTML = `<span class="tree-icon">+</span> ${catName}`;
        
        const subUl = document.createElement('ul');
        subUl.className = 'tree-sub';
        
        section.querySelectorAll('.product-card').forEach(card => {
            const prodName = card.dataset.name;
            const subLi = document.createElement('li');
            subLi.className = 'tree-leaf';
            subLi.dataset.prod = prodName;
            subLi.innerHTML = `<span class="tree-icon"></span> ${prodName}`;
            subUl.appendChild(subLi);
        });
        
        li.appendChild(toggle);
        li.appendChild(subUl);
        rootSub.appendChild(li);
    });

    sidebarCatContainer.innerHTML = '';
    if (title) sidebarCatContainer.appendChild(title);
    sidebarCatContainer.appendChild(treeRoot);

    treeRoot.addEventListener('click', (e) => {
        const toggle = e.target.closest('.tree-toggle');
        const leaf = e.target.closest('.tree-leaf');
        const catSections = document.querySelectorAll('.cat-section');
        const allCards = document.querySelectorAll('.product-card');

        if (toggle) {
            const node = toggle.closest('.tree-node');
            const icon = toggle.querySelector('.tree-icon');
            
            // Toggle open/close
            if (!toggle.classList.contains('active')) {
                node.classList.add('open');
                if (icon) icon.innerText = '-';
            } else {
                node.classList.toggle('open');
                if (icon) icon.innerText = node.classList.contains('open') ? '-' : '+';
            }
            
            const cat = toggle.dataset.cat;
            if (cat) {
                document.querySelectorAll('.tree-toggle, .tree-leaf').forEach(t => t.classList.remove('active'));
                toggle.classList.add('active');
                
                catSections.forEach(s => {
                    s.style.display = (cat === 'all' || s.dataset.category === cat) ? '' : 'none';
                });
                allCards.forEach(c => c.style.display = ''); // reset product cards display

                if (cat !== 'all') {
                    const target = document.querySelector('[data-category="' + cat + '"]');
                    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                }
            }
        } else if (leaf) {
            const prod = leaf.dataset.prod;
            document.querySelectorAll('.tree-toggle, .tree-leaf').forEach(t => t.classList.remove('active'));
            leaf.classList.add('active');
            
            catSections.forEach(s => s.style.display = 'none');
            
            allCards.forEach(c => {
                if (c.dataset.name === prod) {
                    c.style.display = '';
                    c.closest('.cat-section').style.display = '';
                    setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
                } else {
                    c.style.display = 'none';
                }
            });
        }
        
        if (window.innerWidth <= 900) {
            const sidebar = document.getElementById('sidebar');
            if (sidebar) sidebar.classList.remove('open');
        }
    });
});

// Search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    const catSections = document.querySelectorAll('.cat-section');
    if (!q) {
      catSections.forEach(s => s.style.display = '');
      document.querySelectorAll('.product-card').forEach(c => c.style.display = '');
      return;
    }
    const treeToggles = document.querySelectorAll('.tree-toggle');
    treeToggles.forEach(b => b.classList.remove('active'));
    if (treeToggles.length > 0) treeToggles[0].classList.add('active');
    
    catSections.forEach(section => {
      const cards = section.querySelectorAll('.product-card');
      let visible = 0;
      cards.forEach(card => {
        const name = card.dataset.name ? card.dataset.name.toLowerCase() : '';
        const text = card.textContent.toLowerCase();
        if (text.includes(q) || name.includes(q)) {
          card.style.display = '';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });
      section.style.display = visible > 0 ? '' : 'none';
    });
  });
}