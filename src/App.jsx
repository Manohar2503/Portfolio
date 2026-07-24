import { useEffect, useMemo, useState } from 'react'
import { FaArrowDown, FaArrowUpRightFromSquare, FaBars, FaGithub, FaLinkedinIn, FaXmark } from 'react-icons/fa6'

const projects = [
  { number: '01', title: 'Veltrix', type: 'Microservices commerce system', summary: 'A resilient service architecture for commerce flows where each service can fail safely.', points: ['Separated Auth, Product, Order, Payment and Notification into 5 services', 'Made payment requests idempotent so retries cannot double-charge', 'Used Redis auth caching and circuit breakers to isolate failures'], stack: 'Java / Spring Boot / PostgreSQL / Kafka / Redis', url: 'https://github.com/Manohar2503/Veltrix.git' },
  { number: '02', title: 'IntelliPDF', type: 'AI document experience', summary: 'A full-stack reading workspace that turns lengthy documents into a useful, narrated experience.', points: ['Hybrid summarisation turns a 100-page PDF into a one-minute recap', 'Gemini-powered Q&A on extracted document content', 'Processes 100+ page PDFs in under 60 seconds without a GPU'], stack: 'React / Python / FastAPI / LLM / RAG / Docker', url: 'https://github.com/Manohar2503/IntelliPdf.git' },
  { number: '03', title: 'AlumniNexus', type: 'Community platform', summary: 'A professional network connecting students and alumni across jobs, events and mentorship.', points: ['One login and three core modules instead of disconnected groups and spreadsheets', 'JWT authentication, hashed passwords and indexed database searches', 'Used by 70+ students at VVIT'], stack: 'React / Node.js / Express / MongoDB / Redis', url: 'https://github.com/Manohar2503/Alumni_collaborate', live: 'https://alumninexus.onrender.com' },
]

const skillIcons = {
  'Java': '/images/java.svg',
  'Python': '/images/python.svg',
  'JavaScript/TypeScript': '/images/javascript.svg',
  'C++': '/images/cplusplus.svg',
  'React.js': '/images/react.svg',
  'Next.js': '/images/nextjs.svg',
  'Tailwind CSS': '/images/tailwindcss.svg',
  'HTML5/CSS3': '/images/htmlcss.svg',
  'Spring Boot': '/images/springboot.svg',
  'Node.js/Express.js': '/images/nodejs.svg',
  'Microservices': '/images/microservices.svg',
  'AWS': '/images/aws.svg',
  'PostgreSQL': '/images/postgresql.svg',
  'MongoDB': '/images/mongodb.svg',
  'Docker': '/images/docker.svg',
  'Git/GitHub Actions': '/images/github.svg',
  'DSA': '/images/dsa.svg',
  'OOP': '/images/oop.svg',
  'DBMS': '/images/dbms.svg',
  'OS': '/images/os.svg',
  'Networking': '/images/networking.svg',
  'System Design': '/images/systemdesign.svg',
};

const skills = [
  { category: 'Core Languages', description: 'Proficient in modern programming paradigms.', items: ['Java', 'Python', 'JavaScript/TypeScript', 'C++'] },
  { category: 'Frontend Development', description: 'Building intuitive and responsive user interfaces.', items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3'] },
  { category: 'Backend & Cloud', description: 'Designing scalable and robust server-side applications.', items: ['Spring Boot', 'Node.js/Express.js', 'Microservices', 'AWS'] },
  { category: 'Databases & DevOps', description: 'Managing data and automating deployment workflows.', items: ['PostgreSQL', 'MongoDB', 'Docker', 'Git/GitHub Actions'] },
  { category: 'Computer Science Fundamentals', description: 'Strong grasp of theoretical and applied concepts.', items: ['DSA', 'OOP', 'DBMS', 'OS', 'Networking', 'System Design'] },
];

const formattedSkills = skills.map(category => ({
  ...category,
  items: category.items.map(item => ({
    name: item,
    icon: skillIcons[item] || '/images/default.svg', // Fallback to a default icon if not found
  })),
}));

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return <div className="site-shell">
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Manohar Jinka home">MJ<span>.</span></a><nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation"><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#profile" onClick={() => setMenuOpen(false)}>Profile</a><a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><a className="resume-link" href="/images/Manohar_SoftwareEngineer_Resume.pdf" target="_blank" rel="noreferrer">Resume <FaArrowUpRightFromSquare /></a></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <FaXmark /> : <FaBars />}</button></header>
    <main id="top">
      <section className="hero" aria-labelledby="intro-title"><div className="hero-label"><span /> Available for software engineering opportunities</div><div className="hero-main"><p className="eyebrow">Software Engineer / Full-stack Developer</p><h1 id="intro-title">Manohar<br /><em>Jinka.</em></h1><p className="hero-title">Building useful digital systems.</p><div className="portrait-frame"><img src="/images/IMG-20250220-WA0023.jpg" alt="Manohar Jinka" /></div><div className="hero-detail"><p>Full-stack developer with a practical focus on reliable products, clear interfaces, and the engineering beneath them.</p><a className="text-link" href="#profile">Enter profile <FaArrowDown /></a></div></div><div className="hero-foot"><span>Based in Andhra Pradesh, India</span><span>2026 / Portfolio</span></div></section>
      <section className="statement" id="profile"><p className="section-index">01 / Profile</p><div><h2>Thoughtful engineering, from the first interface to the infrastructure behind it.</h2><p className="lead-copy">I am a Computer Science student and full-stack developer who enjoys making complex ideas feel simple to use. My work spans responsive front ends, dependable APIs, data-led features, and collaborative delivery.</p><div className="profile-meta"><div><span>Education</span><strong>B.Tech, Computer Science & Engineering</strong><p>Vasireddy Venkatadri Institute of Technology / 2022-2026 / CGPA 8.5 / 10</p></div><div><span>Recognition</span><strong>Adobe India Hackathon 2025 Finalist</strong><p>Top 100 finalist team nationally from 400,000+ participants</p></div></div></div></section>
      <section className="work unlocked-section" id="work"><div className="section-heading"><p className="section-index">02 / Selected work</p><p>Three builds across microservices, AI, and community platforms.</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.number}><div className="project-number">{project.number}</div><div className="project-title"><p>{project.type}</p><h3>{project.title}</h3></div><div className="project-content"><p className="project-summary">{project.summary}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul><p className="stack">{project.stack}</p></div><div className="project-actions"><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><FaGithub /></a>{project.live && <a className="project-link live-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live demo`}><FaArrowUpRightFromSquare /></a>}</div></article>)}</div></section>
      <section className="experience unlocked-section" id="experience"><p className="section-index">03 / Experience</p><div><div className="experience-card"><div><p className="eyebrow">Feb 2025 - May 2025</p><h2>Software Engineer<br />Intern</h2></div><div><p className="company">AscendSkills / Remote</p><p>Shipped Node.js and Express REST API changes, cutting average response latency 30% through MongoDB compound indexing and connection pooling. Added validation and structured errors across 8 endpoints, versioned routing, and GitHub Actions checks for every pull request.</p></div></div><div className="open-source"><p className="eyebrow">Open source / Jun 2026</p><h3>ApostropheCMS <span>PR #5448 merged</span></h3><p>Diagnosed and fixed a static-asset URL issue in a production CMS under URL-prefixed deployments, then added regression coverage and incorporated maintainer review feedback.</p></div></div></section>
      <section className="capabilities unlocked-section bg-[#20231f] text-[#f5f1e8]" id="capabilities"><div className="section-heading"><p className="section-index">04 / Capabilities</p><p>A focused toolkit, with foundations that travel well between projects.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {formattedSkills.map((skill, index) => (
          <div
            key={skill.category}
            className="
    group
    rounded-3xl
    border
    border-[#383b36]
    bg-[#262925]
    p-7
    transition-all
    duration-300
    hover:border-[#b85736]
    hover:-translate-y-1
    hover:shadow-[0_20px_40px_rgba(0,0,0,.35)]
  "
          >
            <h3 className="text-2xl font-semibold text-[#f5f1e8] mb-2 group-hover:text-[#b85736] transition-colors">
              {skill.category}
            </h3>
            <p className="text-[#9d9f98] text-sm leading-6 mb-6">
              {skill.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item.name}
                  className="
    group/skill
    flex
    items-center
    gap-3
    rounded-xl
    border
    border-[#3a3d38]
    bg-[#20231f]
    px-4
    py-3
    transition-all
    duration-300
    hover:border-[#b85736]
    hover:bg-[#2b2f2a]
    hover:scale-105
  "
                >
                  {/* <img
                    src={item.icon}
                    alt={item.name}
                    className="h-6 w-6 object-contain opacity-80 group-hover/skill:opacity-100"
                  /> */}
                  <span className="text-sm font-medium text-[#ece7dd] tracking-wide">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div></section>
      <section className="contact unlocked-section" id="contact"><p className="section-index">05 / Contact</p><div><p className="eyebrow">Have a role, an idea, or a problem worth solving?</p><h2>Let's make the next<br /><em>one count.</em></h2><a className="email-link" href="mailto:manoharjinka02@gmail.com">manoharjinka02@gmail.com <FaArrowUpRightFromSquare /></a></div><div className="socials"><a href="https://linkedin.com/in/manoharJinka" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a><a href="https://github.com/Manohar2503" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://leetcode.com/u/ManoharJinka/" target="_blank" rel="noreferrer">LeetCode</a><a href="https://www.codechef.com/users/manu1431" target="_blank" rel="noreferrer">CodeChef</a><a href="tel:+919347343206">+91 93473 43206</a></div><p className="problem-count">600+ problems solved across LeetCode, GeeksforGeeks, CodeChef, and HackerRank.</p></section>
    </main><footer><span>© {new Date().getFullYear()} Manohar Jinka</span><span>Designed with intent.</span></footer>
  </div>
}
export default App