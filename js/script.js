const teamMembers = [
    {
        name: 'Gangi Bharath Chandra',
        role: 'Full Stack Developer',
        description: 'Focused on web development, database management, and building responsive full-stack applications.',
        initials: 'GB',
        github: 'https://github.com/gangibharathchandra',
        linkedin: 'https://www.linkedin.com/in/bharath-chandra-a23b62358/'
    },
    {
        name: 'Sama Harika',
        role: 'Frontend Developer',
        description: 'Creates clean user interfaces and brings team project designs to life with HTML, CSS, and JavaScript.',
        initials: 'SH',
        github: 'https://github.com/harikareddy184',
        linkedin: 'https://www.linkedin.com/in/sama-harika-reddy-825861380?utm_source=share_via&utm_content=profile&utm_medium=member_ios'
    },
    {
        name: 'Bollaram Meghana',
        role: 'Frontend Engineer',
        description: 'Builds responsive frontends and improves user experience through polished layouts and interactions.',
        initials: 'BM',
        github: 'https://github.com/meghanareddy0915-ops',
        linkedin: 'https://www.linkedin.com/in/bollaram-meghana-653703383?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    {
        name: 'Vikas V',
        role: 'AI & Software Developer',
        description: 'Works on AI-driven solutions, practical development workflows, and intelligent project features.',
        initials: 'VV',
        github: 'https://github.com/vikass024',
        linkedin: 'https://www.linkedin.com/in/vikas-v-603438327?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    {
        name: 'Lingam Nivedhitha Lakshmi',
        role: 'Web & Data Developer',
        description: 'Specializes in web technologies, data handling, and building useful applications with a strong user focus.',
        initials: 'NL',
        github: 'https://github.com/nivedhithasree9',
        linkedin: 'https://www.linkedin.com/in/lingam-nivedhitha-lakshmi-2687b8362'
    }
];

const projects = [
    {
        title: 'Alpha Circle Portfolio',
        label: 'Website',
        summary: 'This team portfolio website highlights the Alpha Circle members, projects, and contact information on Code Swecha.',
        repo: 'https://code.swecha.org/Bharatg/alpha-circel',
        live: '#'
    },
    {
        title: 'TaskHive',
        label: 'Platform',
        summary: 'A help exchange platform for task collaboration and freelancing, built with Python, HTML, CSS, and DBMS.',
        repo: 'https://code.swecha.org/Bharatg/alpha-circel',
        live: '#'
    },
    {
        title: 'Online Grocery Store',
        label: 'Web App',
        summary: 'A responsive frontend experience with cart functionality, search, and device-friendly design.',
        repo: 'https://code.swecha.org/Bharatg/alpha-circel',
        live: '#'
    },
    {
        title: 'AI Resume Analyzer',
        label: 'Tool',
        summary: 'A resume analysis system that extracts skills, education, and certifications to help users improve their profiles.',
        repo: 'https://code.swecha.org/Bharatg/alpha-circel',
        live: '#'
    },
    {
        title: 'Mini Games Hub',
        label: 'Web Project',
        summary: 'A JavaScript-based mini games platform with scoring, interactions, and a polished user interface.',
        repo: 'https://code.swecha.org/Bharatg/alpha-circel',
        live: '#'
    }
];

function renderTeam() {
    const teamWrapper = document.getElementById('teamCards');
    teamWrapper.innerHTML = teamMembers.map(member => `
        <article class="team-card" onclick="window.location.href='member.html?member=${encodeURIComponent(member.name)}'" tabindex="0">
            <div class="team-avatar">${member.initials}</div>
            <div class="team-meta">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
            <p>${member.description}</p>
            <div class="team-social">
                <a href="${member.github}" target="_blank" rel="noreferrer" aria-label="GitHub" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>
                <a href="${member.linkedin}" target="_blank" rel="noreferrer" aria-label="LinkedIn" onclick="event.stopPropagation()"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </article>
    `).join('');
}

function renderProjects() {
    const projectWrapper = document.getElementById('projectCards');
    projectWrapper.innerHTML = projects.map(project => `
        <article class="project-card">
            <div>
                <span class="project-label"><i class="fas fa-circle"></i>${project.label}</span>
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
            </div>
            <div class="project-links">
                <a href="${project.repo}" target="_blank" rel="noreferrer">Repository</a>
                <a href="${project.live}" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
        </article>
    `).join('');
}

function setupNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

function setupHeroParallax() {
    const hero = document.querySelector('.hero');
    const shapes = hero ? hero.querySelectorAll('.hero-shape') : [];
    if (!hero || !shapes.length) return;

    hero.addEventListener('mousemove', event => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

        shapes.forEach(shape => {
            const speed = Number(shape.dataset.speed) || 10;
            shape.style.transform = `translate3d(${x * speed}px, ${y * speed}px, 0)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        shapes.forEach(shape => {
            shape.style.transform = 'translate3d(0, 0, 0)';
        });
    });
}

function startIntro() {
    const introOverlay = document.getElementById('introOverlay');
    const skipIntro = new URLSearchParams(window.location.search).get('noIntro') === 'true';

    if (skipIntro) {
        document.body.classList.remove('intro-active');
        if (introOverlay) {
            introOverlay.style.display = 'none';
        }
        return;
    }

    setTimeout(() => {
        document.body.classList.remove('intro-active');
    }, 2400);
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.style.display = 'none';
        }
    }, 2800);
}

function setCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderProjects();
    setupNavigation();
    setupHeroParallax();
    setCurrentYear();
    startIntro();
});
