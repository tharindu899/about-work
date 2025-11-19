import { LINKS } from './links.js';

export function buildContacts() {
  const grid = document.getElementById('contactGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const s = LINKS.social || {};
  const items = [
    { name: 'Facebook', href: s.facebook, icon: 'fab fa-facebook-f', cls: 'facebook' },
    { name: 'WhatsApp', href: s.whatsapp, icon: 'fab fa-whatsapp', cls: 'whatsapp' },
    { name: 'Instagram', href: s.instagram, icon: 'fab fa-instagram', cls: 'instagram' },
    { name: 'Telegram', href: s.telegram, icon: 'fab fa-telegram-plane', cls: 'telegram' },
    { name: 'Email', href: s.email, icon: 'fas fa-envelope', cls: 'email' },
    { name: 'GitHub', href: s.github, icon: 'fab fa-github', cls: 'github' }
  ];

  items.forEach(it => {
    const card = document.createElement('div');
    card.className = `contact-card ${it.cls}`;
    card.innerHTML = `
      <div class="contact-icon"><i class="${it.icon}"></i></div>
      <h3 class="contact-name">${it.name}</h3>
      <p class="contact-handle">Connect via ${it.name}</p>
      <a href="${it.href}" target="_blank" class="contact-btn">${it.name} <i class="fas fa-arrow-right"></i></a>
    `;
    grid.appendChild(card);
  });
}
