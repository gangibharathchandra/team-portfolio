const teamMembers = [
    {
        name: 'Member One',
        role: 'Team Lead',
        description: 'Leads product direction, manages collaboration, and designs core features.',
        initials: 'M1',
        github: '#',
        linkedin: '#'
    },
    {
        name: 'Member Two',
        role: 'Frontend Developer',
        description: 'Builds polished interfaces and ensures responsive design across devices.',
        initials: 'M2',
        github: '#',
        linkedin: '#'
    },
    {
        name: 'Member Three',
        role: 'Backend Developer',
        description: 'Implements server logic, APIs, and integrations for reliable project delivery.',
        initials: 'M3',
        github: '#',
        linkedin: '#'
    },
    {
        name: 'Member Four',
        role: 'UI/UX Designer',
        description: 'Creates clean user experiences with a focus on accessibility and usability.',
        initials: 'M4',
        github: '#',
        linkedin: '#'
    },
    {
        name: 'Member Five',
        role: 'Quality Engineer',
        description: 'Tests functionality, improves workflow, and helps ship stable releases.',
        initials: 'M5',
        github: '#',
        linkedin: '#'
    }
];

const projects = [
    {
        title: 'Alpha Circle Portfolio',
        label: 'Website',
        summary: 'A responsive team portfolio showcasing members, project highlights, and contact details.',
        repo: 'https://code.swecha.org/Bharatg/alpha-circel',
        live: '#'
    },
    {
        title: 'Project One',
        label: 'Web App',
        summary: 'A collaborative app built by Alpha Circle for real-world skill development.',
        repo: '#',
        live: '#'
    },
    {
        title: 'Project Two',
        label: 'Design System',
        summary: 'A shared UI and component library to keep our applications consistent and easy to scale.',
        repo: '#',
        live: '#'
    }
];

function renderTeam() {
    const teamWrapper = document.getElementById('teamCards');
    teamWrapper.innerHTML = teamMembers.map(member => `
        <article class="team-card">
            <div class="team-avatar">${member.initials}</div>
            <div class="team-meta">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
            <p>${member.description}</p>
            <div class="team-links">
                <a href="${member.github}" target="_blank" rel="noreferrer">GitHub</a>
                <a href="${member.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
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

function setCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', () => {
    renderTeam();
    renderProjects();
    setupNavigation();
    setCurrentYear();
});
