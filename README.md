# Tharindu - Portfolio

Static portfolio website.

## Folder structure
# Portfolio Website - GitHub Pages Structure

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML file (PROVIDED BELOW)
├── README.md              # Project documentation (PROVIDED BELOW)
├── .gitignore             # Git ignore file (PROVIDED BELOW)
│
├── css/
│   └── styles.css         # Extracted CSS (PROVIDED BELOW)
│
├── js/
│   ├── data.js            # Project data and links (PROVIDED BELOW)
│   ├── translations.js    # Language translations (PROVIDED BELOW)
│   └── main.js            # Main JavaScript logic (PROVIDED BELOW)
│
└── assets/
    └── images/
        └── .gitkeep       # Keep folder in git
```

---

## 📄 FILE 1: index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Tharindu Prabath - Full Stack Developer & UI/UX Designer Portfolio">
  <meta name="keywords" content="web developer, full stack, UI/UX designer, portfolio">
  <meta name="author" content="Tharindu Prabath">
  <title>Tharindu - Portfolio</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <header>
    <div class="logo">
      <div class="logo-icon">
        <i class="fas fa-code"></i>
      </div>
      <span id="logoText">Tharindu</span>
    </div>

    <nav class="nav-menu">
      <button class="nav-btn active" data-page="home">
        <i class="fas fa-home"></i>
        <span id="navHome">Home</span>
      </button>
      <button class="nav-btn" data-page="projects">
        <i class="fas fa-folder-open"></i>
        <span id="navProjects">Projects</span>
      </button>
      <button class="nav-btn" data-page="contact">
        <i class="fas fa-paper-plane"></i>
        <span id="navContact">Contact</span>
      </button>
    </nav>

    <div class="header-controls">
      <button class="theme-toggle" id="themeToggle">
        <i class="fas fa-moon"></i>
      </button>
      <button class="lang-toggle" id="langToggle">
        <span>සිං</span>
      </button>
      <button class="mobile-menu-toggle" id="mobileMenuToggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>

  <nav class="mobile-nav" id="mobileNav">
    <button class="nav-btn active" data-page="home">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </button>
    <button class="nav-btn" data-page="projects">
      <i class="fas fa-folder-open"></i>
      <span>Projects</span>
    </button>
    <button class="nav-btn" data-page="contact">
      <i class="fas fa-paper-plane"></i>
      <span>Contact</span>
    </button>
  </nav>

  <main>
    <!-- Home Section -->
    <section class="section active" id="homeSection">
      <div class="container">
        <div class="hero">
          <div class="hero-content">
            <div class="hero-avatar">
              <i class="fas fa-user"></i>
            </div>
            <h1 class="hero-title" id="heroTitle">Tharindu Prabath</h1>
            <p class="hero-subtitle" id="heroSubtitle">Full Stack Developer & UI/UX Designer</p>
            <p class="hero-description" id="heroDescription">
              Passionate about creating beautiful, functional web applications that make a difference. 
              Specialized in modern JavaScript frameworks, responsive design, and seamless user experiences.
            </p>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">4+</div>
              <div class="stat-label" id="statProjects">Projects Completed</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">2+</div>
              <div class="stat-label" id="statExperience">Years Experience</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">10+</div>
              <div class="stat-label" id="statTech">Technologies</div>
            </div>
          </div>
        </div>

        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3 id="skillFrontend">Frontend Development</h3>
            <div class="skill-list">
              <span class="skill-tag">HTML5</span>
              <span class="skill-tag">CSS3</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">Vue.js</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3 id="skillBackend">Backend Development</h3>
            <div class="skill-list">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">REST APIs</span>
            </div>
          </div>

          <div class="skill-category">
            <div class="skill-icon">
              <i class="fas fa-palette"></i>
            </div>
            <h3 id="skillDesign">Design & Tools</h3>
            <div class="skill-list">
              <span class="skill-tag">Figma</span>
              <span class="skill-tag">UI/UX</span>
              <span class="skill-tag">Canvas</span>
              <span class="skill-tag">Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section" id="projectsSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" id="projectsTitle">My Projects</h2>
          <p class="section-subtitle" id="projectsSubtitle">A collection of my recent work and creative projects</p>
        </div>
        <div class="projects-grid" id="projectsGrid"></div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section" id="contactSection">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title" id="contactTitle">Let's Connect</h2>
          <p class="section-subtitle" id="contactSubtitle">Get in touch through any of these platforms</p>
        </div>
        <div class="contact-grid" id="contactGrid"></div>
        <div class="contact-info">
          <h3 id="contactInfoTitle">Ready to Start a Project?</h3>
          <p id="contactInfoText1">
            I'm always excited to connect with fellow developers, potential clients, and anyone 
            interested in web development and design. Whether you have a project in mind, want to 
            collaborate, or just want to say hello, feel free to reach out!
          </p>
          <p id="contactInfoText2">
            I typically respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <a href="https://github.com/tharindu899" class="footer-link" target="_blank">GitHub</a>
        <a href="#" class="footer-link">LinkedIn</a>
        <a href="#" class="footer-link">Twitter</a>
      </div>
      <p class="footer-text" id="footerText">© 2025 Tharindu Prabath. All rights reserved. v1.0.6</p>
    </div>
  </footer>

  <script src="js/data.js"></script>
  <script src="js/translations.js"></script>
  <script src="js/main.js"></script>
</body>
</html>
```

---

## 📄 FILE 2: css/styles.css

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #10b981;
  --secondary: #06b6d4;
  --accent: #8b5cf6;
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --border: rgba(148, 163, 184, 0.1);
  --shadow: rgba(0, 0, 0, 0.3);
  --gradient-1: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);
  --gradient-2: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
}

[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #e2e8f0;
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --border: rgba(15, 23, 42, 0.1);
  --shadow: rgba(0, 0, 0, 0.1);
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background 0.3s, color 0.3s;
  overflow-x: hidden;
  position: relative;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: var(--bg-secondary);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  transition: all 0.3s;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 800;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-icon {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle, .lang-toggle {
  width: 45px;
  height: 45px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg-tertiary);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  font-size: 18px;
}

.theme-toggle:hover, .lang-toggle:hover {
  background: var(--gradient-1);
  color: white;
  transform: scale(1.05);
}

.nav-menu {
  display: flex;
  gap: 0.5rem;
}

.nav-btn {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-btn:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.nav-btn.active {
  background: var(--gradient-1);
  color: white;
}

.mobile-menu-toggle {
  display: none;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  border: none;
  background: var(--bg-tertiary);
  color: var(--text-primary);
  cursor: pointer;
  font-size: 20px;
}

/* Main Content */
main {
  margin-top: 70px;
  min-height: calc(100vh - 70px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.section {
  display: none;
  animation: fadeIn 0.5s;
}

.section.active {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hero Section */
.hero {
  padding: 4rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 60px;
  color: white;
  box-shadow: 0 20px 60px var(--shadow);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat-card {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px var(--shadow);
}

.stat-number {
  font-size: 3rem;
  font-weight: 900;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-category {
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px var(--shadow);
}

.skill-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: var(--gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
  margin-bottom: 1.5rem;
}

.skill-category h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 8px 16px;
  background: var(--bg-tertiary);
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

/* Projects Section */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-secondary);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px var(--shadow);
}

.project-image {
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.project-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--bg-secondary), transparent);
}

.project-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 8px 16px;
  background: rgba(16, 185, 129, 0.9);
  color: white;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  z-index: 1;
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 6px 14px;
  background: var(--bg-tertiary);
  border-radius: 16px;
  font-size: 0.85rem;
  color: var(--primary);
  border: 1px solid var(--primary);
  font-weight: 600;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.project-date {
  color: var(--text-muted);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.project-link {
  padding: 10px 20px;
  background: var(--gradient-1);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s;
}

.project-link:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 20px rgba(16, 185, 129, 0.4);
}

/* Contact Section */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-card {
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid var(--border);
  text-align: center;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-1);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.contact-card:hover::before {
  transform: scaleX(1);
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px var(--shadow);
}

.contact-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  transition: all 0.3s;
}

.contact-card:hover .contact-icon {
  transform: scale(1.1) rotate(5deg);
}

.facebook .contact-icon { background: linear-gradient(135deg, #1877f2, #0866ff); }
.whatsapp .contact-icon { background: linear-gradient(135deg, #25d366, #20ba5a); }
.instagram .contact-icon { background: linear-gradient(135deg, #f09433, #e1306c, #c13584); }
.telegram .contact-icon { background: linear-gradient(135deg, #0088cc, #229ed9); }
.email .contact-icon { background: linear-gradient(135deg, #ea4335, #c5221f); }
.github .contact-icon { background: linear-gradient(135deg, #333, #24292e); }

.contact-name {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.contact-handle {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: var(--bg-tertiary);
  border: 2px solid var(--border);
  border-radius: 12px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
}

.contact-btn:hover {
  background: var(--gradient-1);
  border-color: transparent;
  color: white;
  transform: translateY(-3px);
}

.contact-info {
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid var(--border);
  text-align: center;
}

.contact-info h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-info p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* Footer */
footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 3rem 2rem;
  text-align: center;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: var(--primary);
}

.footer-text {
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  header {
    padding: 0 1rem;
  }

  .container {
    padding: 2rem 1rem;
  }
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 1rem;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 999;
}

.mobile-nav.active {
  display: flex;
}

.mobile-nav .nav-btn {
  width: 100%;
  justify-content: center;
}
```

---

## 📄 FILE 3: js/data.js

```javascript
const LINKS = {
  site: {
    author: "Tharindu",
    copyright: "© 2025 Tharindu. All rights reserved.",
    version: "v1.0.6"
  },
  social: {
    facebook: "https://www.facebook.com/share/17UvLjL5Xs/",
    whatsapp: "https://wa.me/1234567890", // Replace with your WhatsApp number
    instagram: "https://instagram.com/yourprofile", // Replace with your Instagram
    telegram: "https://t.me/SLtharindu1",
    email: "mailto:tprabath81t@gmail.com",
    github: "https://github.com/tharindu899"
  },
  projects: [
    {
      title: "Flixora - Movies & Series",
      desc: "A modern web application with multiple utilities and tools designed for everyday use. Features include movie browsing, series tracking, and personalized recommendations.",
      date: "Nov 2024",
      url: "https://toxybox99.eu.org",
      img: "https://i.ibb.co/yctJjbpz/Screenshot-2025-11-19-00-14-32-253-com-android-chrome-edit.jpg",
      tech: ["JavaScript", "HTML", "CSS", "MongoDB"]
    },
    {
      title: "Aviator Predictor Pro 1xbet",
      desc: "A sophisticated prediction tool for the Aviator game with advanced algorithms and real-time analysis capabilities.",
      date: "Nov 2025",
      url: "https://tharindu899.github.io/aviator_predictor_Pro_1xbet/",
      img: "https://i.ibb.co/VcMKqMgZ/Screenshot-2025-11-19-15-58-15-369-com-android-chrome-edit.jpg",
      tech: ["JavaScript", "CSS", "Algorithms"]
    },
    {
      title: "Aviator Signal Generator",
      desc: "A replica of the popular Aviator game with smooth animations, real-time updates, and interactive gameplay mechanics.",
      date: "Nov 2025",
      url: "https://tharindu899.github.io/avi-copy/",
      img: "https://i.ibb.co/Kz65XhpR/Screenshot-2025-11-19-15-58-40-216-com-android-chrome-edit.jpg",
      tech: ["JavaScript", "Canvas", "Animation"]
    },
    {
      title: "Betting Tracker Pro",
      desc: "Track your betting stats with a clean, intuitive interface. Features include detailed analytics, history tracking, and performance insights.",
      date: "Nov 2025",
      url: "https://tharindu899.github.io/Aviator-Betting-Tracker/",
      img: "https://i.ibb.co/ycDNykr5/Screenshot-2025-11-19-15-59-06-805-com-android-chrome-edit.jpg",
      tech: ["HTML", "CSS", "JavaScript"]
    }
  ]
};
```

---

## 📄 FILE 4: js/translations.js

```javascript
const translations = {
  en: {
    logoText: 'Tharindu',
    navHome: 'Home',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroTitle: 'Tharindu Prabath',
    heroSubtitle: 'Full Stack Developer & UI/UX Designer',
    heroDescription: 'Passionate about creating beautiful, functional web applications that make a difference. Specialized in modern JavaScript frameworks, responsive design, and seamless user experiences.',
    statProjects: 'Projects Completed',
    statExperience: 'Years Experience',
    statTech: 'Technologies',
    skillFrontend: 'Frontend Development',
    skillBackend: 'Backend Development',
    skillDesign: 'Design & Tools',
    projectsTitle: 'My Projects',
    projectsSubtitle: 'A collection of my recent work and creative projects',
    contactTitle: "Let's Connect",
    contactSubtitle: 'Get in touch through any of these platforms',
    contactInfoTitle: 'Ready to Start a Project?',
    contactInfoText1: "I'm always excited to connect with fellow developers, potential clients, and anyone interested in web development and design. Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out!",
    contactInfoText2: 'I typically respond within 24 hours. Looking forward to hearing from you!',
    footerText: '© 2025 Tharindu Prabath. All rights reserved. v1.0.6'
  },
  si: {
    logoText: 'තරින්දු',
    navHome: 'මුල් පිටුව',
    navProjects: 'ව්‍යාපෘති',
    navContact: 'සම්බන්ධ වන්න',
    heroTitle: 'තරින්දු ප්‍රභාත්',
    heroSubtitle: 'පූර්ණ ස්ථාක් සංවර්ධක සහ UI/UX නිර්මාණකරු',
    heroDescription: 'වෙනසක් ඇති කරන ලස්සන, ක්‍රියාකාරී වෙබ් යෙදුම් නිර්මාණය කිරීම ගැන ඉතාමත්ම උනන්දුයි. නවීන JavaScript frameworks, ප්‍රතිචාර නිර්මාණ සහ බාධාවකින් තොර පරිශීලක අත්දැකීම් පිළිබඳ විශේෂඥයෙකි.',
    statProjects: 'ව්‍යාපෘති සම්පූර්ණ කළා',
    statExperience: 'වසර අත්දැකීම්',
    statTech: 'තාක්ෂණයන්',
    skillFrontend: 'ඉදිරිපස සංවර්ධනය',
    skillBackend: 'පසුබිම් සංවර්ධනය',
    skillDesign: 'නිර්මාණ සහ මෙවලම්',
    projectsTitle: 'මගේ ව්‍යාපෘති',
    projectsSubtitle: 'මගේ මෑත කාලීන වැඩ සහ නිර්මාණාත්මක ව්‍යාපෘති එකතුවක්',
    contactTitle: 'සම්බන්ධ වන්න',
    contactSubtitle: 'මෙම ඕනෑම වේදිකාවක් හරහා සම්බන්ධ වන්න',
    contactInfoTitle: 'ව්‍යාපෘතියක් ආරම්භ කිරීමට සූදානම්ද?',
    contactInfoText1: 'මම සීමා විටම සංවර්ධකයින්, අනාගත ගනුදෙනුකරුවන් සහ වෙබ් සංවර්ධනය හා නිර්මාණය ගැන ඉතාමත්ම උනන්දුවක් දක්වන ඕනෑම අයෙක් සමඟ සම්බන්ධ වීමට කැමතියි.',
    contactInfoText2: 'මම සාමාන්‍යයෙන් පැය 24ක් ඇතුළත ප්‍රතිචාර දක්වමි. ඔබෙන් ආරංචියක් බලාපොරොත්තුවෙමි!',
    footerText: '© 2025 තරින්දු ප්‍රභාත්. සියලුම හිමිකම් ඉවිරිනි. v1.0.6'
  }
};
```

---

## 📄 FILE 5: js/main.js

```javascript
let currentLang = 'en';
let currentTheme = 'dark';

// Build Projects
function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = '';
  
  LINKS.projects.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="project-image" style="background-image:url('${p.img}')">
        <span class="project-badge">${p.date}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-description">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span class="project-date">
            <i class="far fa-calendar"></i>
            ${p.date}
          </span>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-link">
            View Project <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Build Contact Cards
function buildContacts() {
  const grid = document.getElementById('contactGrid');
  grid.innerHTML = '';

  const items = [
    { name: 'Facebook', href: LINKS.social.facebook, icon: 'fab fa-facebook-f', cls: 'facebook' },
    { name: 'WhatsApp', href: LINKS.social.whatsapp, icon: 'fab fa-whatsapp', cls: 'whatsapp' },
    { name: 'Instagram', href: LINKS.social.instagram, icon: 'fab fa-instagram', cls: 'instagram' },
    { name: 'Telegram', href: LINKS.social.telegram, icon: 'fab fa-telegram-plane', cls: 'telegram' },
    { name: 'Email', href: LINKS.social.email, icon: 'fas fa-envelope', cls: 'email' },
    { name: 'GitHub', href: LINKS.social.github, icon: 'fab fa-github', cls: 'github' }
  ];

  items.forEach(it => {
    const card = document.createElement('div');
    card.className = `contact-card ${it.cls}`;
    card.innerHTML = `
      <div class="contact-icon"><i class="${it.icon}"></i></div>
      <h3 class="contact-name">${it.name}</h3>
      <p class="contact-handle">Connect via ${it.name}</p>
      <a href="${it.href}" target="_blank" rel="noopener noreferrer" class="contact-btn">
        Get in Touch <i class="fas fa-arrow-right"></i>
      </a>
    `;
    grid.appendChild(card);
  });
}

// Change Language
function changeLanguage(lang) {
  currentLang = lang;
  const map = translations[lang] || translations.en;
  
  Object.keys(map).forEach(key => {
    const el = document.getElementById(key);
    if (el) el.textContent = map[key];
  });

  const langBtn = document.getElementById('langToggle');
  langBtn.innerHTML = lang === 'en' ? '<span>සිං</span>' : '<span>EN</span>';
}

// Toggle Theme
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  const themeBtn = document.getElementById('themeToggle');
  themeBtn.innerHTML = currentTheme === 'dark' 
    ? '<i class="fas fa-moon"></i>' 
    : '<i class="fas fa-sun"></i>';
}

// Switch Page
function switchPage(page) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(n => n.classList.remove('active'));
  
  document.getElementById(page + 'Section').classList.add('active');
  document.querySelectorAll(`[data-page="${page}"]`).forEach(btn => btn.classList.add('active'));
  
  document.getElementById('mobileNav').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize
  buildProjects();
  buildContacts();
  changeLanguage('en');

  // Theme Toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  
  // Language Toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    changeLanguage(currentLang === 'en' ? 'si' : 'en');
  });

  // Mobile Menu Toggle
  document.getElementById('mobileMenuToggle').addEventListener('click', () => {
    document.getElementById('mobileNav').classList.toggle('active');
  });

  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.getAttribute('data-page');
      switchPage(page);
    });
  });
});
```

---

## 📄 FILE 6: README.md

```markdown
# Tharindu Prabath - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful dark/light theme, multilingual support (English/Sinhala), and smooth animations.

## 🌟 Features

- **Responsive Design** - Works on all devices (desktop, tablet, mobile)
- **Dark/Light Theme** - Toggle between dark and light modes
- **Bilingual** - English and Sinhala language support
- **Modern UI** - Beautiful gradients, animations, and hover effects
- **Projects Showcase** - Display your work with images and descriptions
- **Contact Section** - Multiple ways to connect (social media, email)
- **Fast Loading** - No external dependencies except Font Awesome icons

## 🚀 Live Demo

Visit: [Your GitHub Pages URL]

## 📁 Project Structure

```
portfolio/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   ├── translations.js
│   └── main.js
├── assets/
│   └── images/
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Customize your content**
   - Edit `js/data.js` - Update projects, social links, and personal info
   - Edit `js/translations.js` - Modify text translations
   - Replace images in projects with your own

3. **Test locally**
   - Open `index.html` in your browser
   - Or use a local server (recommended)

4. **Deploy to GitHub Pages**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
   - Go to repository Settings → Pages
   - Select branch: main, folder: / (root)
   - Your site will be live at `https://yourusername.github.io/repository-name/`

## ⚙️ Customization

### Update Projects
Edit `js/data.js`:
```javascript
projects: [
  {
    title: "Your Project Name",
    desc: "Project description",
    date: "Month Year",
    url: "https://project-url.com",
    img: "https://image-url.jpg",
    tech: ["HTML", "CSS", "JavaScript"]
  }
]
```

### Update Social Links
Edit `js/data.js`:
```javascript
social: {
  facebook: "your-facebook-url",
  whatsapp: "https://wa.me/your-number",
  instagram: "your-instagram-url",
  telegram: "your-telegram-url",
  email: "mailto:your-email@example.com",
  github: "your-github-url"
}
```

### Change Colors
Edit `css/styles.css` and modify the `:root` variables:
```css
:root {
  --primary: #10b981;
  --secondary: #06b6d4;
  --accent: #8b5cf6;
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Tharindu Prabath**
- GitHub: [@tharindu899](https://github.com/tharindu899)
- Email: tprabath81t@gmail.com

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern web design trends

---

Made with ❤️ by Tharindu Prabath
```

---

## 📄 FILE 7: .gitignore

```
# System Files
.DS_Store
Thumbs.db
desktop.ini

# Editor Files
.vscode/
.idea/
*.swp
*.swo
*~

# OS Files
*.log
npm-debug.log*

# Temporary Files
*.tmp
temp/
tmp/

# Build Files (if you add build tools later)
node_modules/
dist/
build/

# Environment Files
.env
.env.local
```

---

## 🚀 Deployment Steps

### 1. Create Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `portfolio` or `yourusername.github.io`
4. Keep it Public
5. Don't initialize with README (we already have one)
6. Click "Create Repository"

### 2. Initialize Git and Push

Open terminal in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website v1.0.6"

# Add remote (replace with your URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

### 4. Access Your Site

Your site will be available at:
- `https://yourusername.github.io/portfolio/`
- Or `https://yourusername.github.io/` if repo name is `yourusername.github.io`

---

## 📝 Quick Checklist

Before deploying, make sure you:

- ✅ Created all 7 files
- ✅ Updated personal information in `js/data.js`
- ✅ Updated social media links
- ✅ Replaced project images and URLs
- ✅ Tested locally in browser
- ✅ All images are hosted online (using services like ImgBB)
- ✅ Created `assets/images/.gitkeep` file (empty file to keep folder)

---

## 🎨 Optional Enhancements

### Add Custom Domain
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In GitHub Pages settings, add your custom domain
3. Update DNS records at your domain provider

### Add Analytics
Add Google Analytics to track visitors:
```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

### Add Favicon
```html
<!-- Add in <head> of index.html -->
<link rel="icon" type="image/png" href="assets/favicon.png">
```

---

## 💡 Tips

1. **Test thoroughly** - Open index.html in different browsers
2. **Use HTTPS URLs** - For all external images and links
3. **Compress images** - Use tools like TinyPNG for faster loading
4. **Check mobile** - Test on actual mobile devices
5. **Update regularly** - Add new projects as you complete them

---

## 🐛 Troubleshooting

**Site not showing after deployment?**
- Wait 2-3 minutes after enabling Pages
- Check if repository is Public
- Ensure index.html is in root directory
- Clear browser cache

**Images not loading?**
- Ensure image URLs use HTTPS
- Check if image hosting service is working
- Verify image URLs in `js/data.js`

**Theme/Language not working?**
- Check browser console for errors (F12)
- Ensure all JS files are linked correctly
- Verify file paths are correct

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console (F12) for errors
2. Verify all file paths are correct
3. Ensure all files are in the correct folders
4. Create an issue on the GitHub repository

---

**Happy Coding! 🚀**

## 🚀 Deployment Steps

1. **Create Repository**
   - Go to GitHub and create a new repository
   - Name it: `your-username.github.io` or `portfolio`

2. **Initialize Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

3. **Connect to GitHub**
   ```bash
   git remote add origin https://github.com/your-username/your-repo.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch
   - Branch: main, folder: / (root)
   - Save

5. **Access Your Site**
   - URL: `https://your-username.github.io/your-repo/`
   - Or: `https://your-username.github.io/` (if using username.github.io)

## 📝 Notes

- Update social media links in `js/data.js`
- Replace project images with your own
- Customize content in translations
- Site will be live in 1-2 minutes after push

## 🔧 Local Development

```bash
# Open with live server or simply open index.html in browser
```

No build process needed - pure HTML/CSS/JS!