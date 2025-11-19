import { LINKS } from './links.js';

export function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const projects = LINKS.projects || [];

  projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-image" style="background-image:url('${p.img}')">
        <div class="project-overlay">
          <div class="project-links">
            <a href="${p.url}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.desc}</p>
        <div class="project-tech">${(p.tech||[]).map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="project-footer">
          <span class="project-date">${p.date}</span>
          <a href="${p.url}" target="_blank" class="view-more">View Project <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    `;
    card.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });
}
