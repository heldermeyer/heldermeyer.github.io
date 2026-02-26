const content = {
    pt: {
        "nav-about": "Sobre", "nav-exp": "Experiência", "nav-skills": "Skills",
        "hero-tag": "Data Engineer & Automation Analyst",
        "about-title": "Quem sou eu",
        "about-p": "Engenheiro de Computação com experiência em análise de dados, automação de processos e desenvolvimento de software. Atuação no desenvolvimento de scripts em Python para integração entre sistemas e coleta automática de dados, com foco na otimização de fluxos de trabalho. Vivência na manipulação de bases de dados SQL Server e MySQL, atuando na estruturação de consultas e elaboração de dashboards em Power BI para monitoramento de indicadores operacionais.",
        "edu-title": "Formação",
        "edu-course": "Bacharelado em Engenharia de Computação",
        "exp-title": "Jornada Profissional",
        "skills-title": "Habilidades Técnicas",
        experiences: [
            { 
                role: "Analista de Dados", 
                company: "INFINITY SCHOOL - Visual Art Creative Center", 
                date: "Set 2025 - Nov 2025", 
                desc: "Atuação focada em Engenharia de Dados e Automação de processos internos. Desenvolvi scripts em Python com Selenium para automatizar tarefas repetitivas, alcançando uma redução de 87% no tempo de execução (de 40 para 5 minutos). Responsável pela manutenção de bancos de dados MySQL via DBeaver, realizando consultas SQL para validação de frequência e registros acadêmicos. Implementei aplicações em Flask para centralizar dados via Web Scraping e integrar fluxos entre os setores financeiro e acadêmico." 
            },
            { 
                role: "Estagiário de Ciência de Dados", 
                company: "Continental do Brasil Produtos Automotivos Ltda.", 
                date: "Abr 2024 - Mar 2025", 
                desc: "Estágio voltado à Ciência de Dados aplicada à manufatura industrial. Desenvolvi dashboards em Power BI e utilizei Python e Excel para a criação de processos ETL, fornecendo suporte à tomada de decisão baseada em diagnósticos industriais. Realizei análises em SQL Server para suportar os sistemas CGMS e SAP EWM no chão de fábrica. Atuei no suporte técnico de sistemas de manufatura em colaboração com times internacionais, utilizando o inglês para comunicação técnica." 
            },
            { 
                role: "Estagiário de Suporte de TI e Desenvolvedor ASP.NET", 
                company: "Sesc Bahia", 
                date: "Mai 2023 - Mar 2024", 
                desc: "Experiência multidisciplinar em Suporte de TI e Desenvolvimento de Software. Desenvolvi aplicações web utilizando C# (ASP.NET Core), HTML, CSS, JavaScript e SQL Server. Realizei a modelagem de bancos de dados com Entity Framework e gerenciei o suporte técnico a usuários, sistemas operacionais e sistemas corporativos da unidade." 
            },
            { 
                role: "Projetista de TI & Assessor Financeiro", 
                company: "Praxis - Empresa Jr.", 
                date: "Jun 2022 - Dez 2022", 
                desc: "Atuação inicial como Projetista de TI e Assessor Financeiro. Desenvolvi interfaces web utilizando HTML5, CSS3 e JavaScript, além de receber capacitação técnica em Git e Figma. Na área financeira, fui responsável pela elaboração do planejamento financeiro e pela redação de relatórios administrativos para a diretoria da empresa." 
            }
        ],
        skillCategories: [
            {
                name: "Linguagens e Tecnologias",
                items: [
                    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                    { name: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                    { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" }
                ]
            },
            {
                name: "Dados & BI",
                items: [
                    { name: "ETL", img: "https://cdn-icons-png.flaticon.com/512/2730/2730452.png" },
                    { name: "Power BI", img: "assets/images/powerbi.png" },
                    { name: "Web Scraping", img: "https://cdn-icons-png.flaticon.com/512/2042/2042393.png" },
                    { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" }
                ]
            },
            {
                name: "Ferramentas",
                items: [
                    { name: "Git/GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
                    { name: "SAP EWM", img: "https://cdn.simpleicons.org/sap/white" },
                    { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                    { name: "DBeaver", img: "https://cdn.simpleicons.org/dbeaver/white" }
                ]
            }
        ]
    },
    en: {
        "nav-about": "About", "nav-exp": "Experience", "nav-skills": "Skills",
        "hero-tag": "Data Engineer & Automation Analyst",
        "about-title": "Who I Am",
        "about-p": "Computer Engineer with experience in data analysis, process automation, and software development. Expertise in Python script development for system integration and automated data collection. Skilled in SQL Server and MySQL database management, creating Power BI dashboards for operational monitoring.",
        "edu-title": "Education",
        "edu-course": "Bachelor of Computer Engineering",
        "exp-title": "Professional Journey",
        "skills-title": "Technical Skills",
        experiences: [
            { role: "Data Analyst", company: "INFINITY SCHOOL", date: "Sep 2025 - Nov 2025", desc: "Focused on Data Engineering and process automation. Developed Python scripts using Selenium to automate repetitive tasks, achieving an 87% reduction in execution time (from 40 to 5 minutes). Managed MySQL database integrity via DBeaver, executing SQL queries for attendance validation and academic record maintenance. Built Flask applications to centralize data through Web Scraping and integrate information flows between financial and academic departments." },
            { role: "Data Science Intern", company: "Continental", date: "Apr 2024 - Mar 2025", desc: "Internship focused on Data Science applied to industrial manufacturing. Developed Power BI dashboards and utilized Python and Excel for ETL processes, providing decision-making support based on industrial diagnostics. Performed SQL Server analysis to support CGMS and SAP EWM systems on the factory floor. Provided technical support for manufacturing systems in collaboration with international teams, utilizing English for technical communication." },
            { role: "IT Support & Dev Intern", company: "Sesc Bahia", date: "May 2023 - Mar 2024", desc: "Multidisciplinary experience in IT Support and Software Development. Developed web applications using C# (ASP.NET Core), HTML, CSS, JavaScript, and SQL Server. Performed database modeling with Entity Framework and managed technical support for users, operating systems, and corporate systems." },
            { role: "IT Designer & Financial Advisor", company: "Praxis - Jr. Company", date: "Jun 2022 - Dec 2022", desc: "Initial role as IT Designer and Financial Advisor. Developed web interfaces using HTML5, CSS3, and JavaScript, while receiving technical training in Git and Figma. In the finance department, I was responsible for financial planning and preparing administrative reports for the company's board." }
        ],
        skillCategories: [
            {
                name: "Languages and Technologies",
                items: [
                    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
                    { name: "SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
                    { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                    { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" }
                ]
            },
            {
                name: "Data & BI",
                items: [
                    { name: "ETL", img: "https://cdn-icons-png.flaticon.com/512/2730/2730452.png" },
                    { name: "Power BI", img: "assets/images/powerbi.png" },
                    { name: "Web Scraping", img: "https://cdn-icons-png.flaticon.com/512/2042/2042393.png" },
                    { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" }
                ]
            },
            {
                name: "Tools",
                items: [
                    { name: "Git/GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
                    { name: "SAP EWM", img: "https://cdn.simpleicons.org/sap/white" },
                    { name: "Linux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
                    { name: "DBeaver", img: "https://cdn.simpleicons.org/dbeaver/white" }
                ]
            }
        ]
    }
};

function setLanguage(lang) {
    localStorage.setItem('helder-lang', lang);
    const data = content[lang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.textContent = data[key];
    });

    const expContainer = document.getElementById('exp-list');
    expContainer.innerHTML = data.experiences.map(exp => `
        <div class="timeline-item">
            <div class="exp-card">
                <span class="date" style="font-size: 0.8rem; opacity: 0.7;">${exp.date}</span>
                <h3>${exp.role}</h3>
                <span class="company-name">${exp.company}</span>
                <p>${exp.desc}</p>
            </div>
        </div>
    `).join('');

    const skillContainer = document.getElementById('skills-container');
    skillContainer.innerHTML = data.skillCategories.map(cat => `
        <div class="skills-category">
            <h3>${cat.name}</h3>
            <div class="skills-grid">
                ${cat.items.map(s => `
                    <div class="skill-card">
                        <img src="${s.img}" alt="${s.name}">
                        <span>${s.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    observeTimeline();
}

function observeTimeline() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item').forEach(item => observer.observe(item));
}

function copyDiscord() {
    navigator.clipboard.writeText("meyerzera");
    alert("Discord ID (meyerzera) copiado!");
}

function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~'.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({length: columns}).fill(1);
    
    setInterval(() => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(255, 189, 27, 0.5)'; // Cor amarela do seu tema
        ctx.font = fontSize + 'px monospace';
        
        drops.forEach((y, i) => {
            const text = characters[Math.floor(Math.random() * characters.length)];
            ctx.fillText(text, i * fontSize, y * fontSize);
            
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }, 50);
}

window.addEventListener('resize', () => {
    const canvas = document.getElementById('matrixCanvas');
    if(canvas) {
        canvas.width = window.innerWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
});

window.onload = () => {
    lucide.createIcons();
    const savedLang = localStorage.getItem('helder-lang') || 'pt';
    setLanguage(savedLang);
    initMatrix();
};