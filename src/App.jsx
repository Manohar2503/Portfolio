import { useEffect, useMemo, useState } from 'react'
import { FaArrowDown, FaArrowUpRightFromSquare, FaBars, FaGithub, FaLinkedinIn, FaXmark, FaLock } from 'react-icons/fa6'

const projects = [
  { number: '01', title: 'Veltrix', type: 'Microservices commerce system', summary: 'A resilient service architecture for commerce flows where each service can fail safely.', points: ['Separated Auth, Product, Order, Payment and Notification into 5 services', 'Made payment requests idempotent so retries cannot double-charge', 'Used Redis auth caching and circuit breakers to isolate failures'], stack: 'Java / Spring Boot / PostgreSQL / Kafka / Redis', url: 'https://github.com/Manohar2503/Veltrix.git' },
  { number: '02', title: 'IntelliPDF', type: 'AI document experience', summary: 'A full-stack reading workspace that turns lengthy documents into a useful, narrated experience.', points: ['Hybrid summarisation turns a 100-page PDF into a one-minute recap', 'Gemini-powered Q&A on extracted document content', 'Processes 100+ page PDFs in under 60 seconds without a GPU'], stack: 'React / Python / FastAPI / LLM / RAG / Docker', url: 'https://github.com/Manohar2503/IntelliPdf.git' },
  { number: '03', title: 'AlumniNexus', type: 'Community platform', summary: 'A professional network connecting students and alumni across jobs, events and mentorship.', points: ['One login and three core modules instead of disconnected groups and spreadsheets', 'JWT authentication, hashed passwords and indexed database searches', 'Used by 70+ students at VVIT'], stack: 'React / Node.js / Express / MongoDB / Redis', url: 'https://github.com/Manohar2503/Alumni_collaborate', live: 'https://alumninexus.onrender.com' },
]
const skills = [['Languages', 'Java, Python, JavaScript'], ['Frontend', 'React.js, HTML5, CSS3'], ['Backend & systems', 'Spring Boot, Node.js, Express.js, REST APIs, Microservices'], ['Data, cloud & DevOps', 'PostgreSQL, MongoDB, AWS, Docker, GitHub Actions'], ['Foundations', 'Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks']]
const challengeTitles = { work: 'Project vault', experience: 'Career archive', capabilities: 'Systems chamber', contact: 'Contact gateway' }
const runes = [{ id: 'agni', glyph: '✦', name: 'Agni' }, { id: 'vayu', glyph: '◈', name: 'Vayu' }, { id: 'jala', glyph: '◌', name: 'Jala' }, { id: 'prithvi', glyph: '◆', name: 'Prithvi' }, { id: 'akasha', glyph: '✧', name: 'Akasha' }, { id: 'indra', glyph: '✹', name: 'Indra' }]
const shuffle = (items) => [...items].sort(() => Math.random() - 0.5)

function Challenge({ stage, onUnlock, onSuccess }) {
  const cipher = useMemo(() => shuffle(runes).slice(0, 5), [])
  const choices = useMemo(() => shuffle(runes), [])
  const [entered, setEntered] = useState([])
  const [revealed, setRevealed] = useState(true)
  const [error, setError] = useState(false)
  useEffect(() => { const timer = setTimeout(() => setRevealed(false), 4200); return () => clearTimeout(timer) }, [])
  const choose = (id) => {
    if (revealed) return
    const expected = cipher[entered.length]?.id
    if (id !== expected) { setEntered([]); setError(true); return }
    const next = [...entered, id]
    setError(false)
    if (next.length === cipher.length) { onUnlock(stage); setTimeout(onSuccess, 180); return }
    setEntered(next)
  }
  return <section className="challenge cinematic-gate" id={`access-${stage}`} aria-label={`${challengeTitles[stage]} access challenge`}>
    <div className="star-field"><i /><i /><i /><i /><i /><i /></div><div className="gate-orb" /><div className="rocket"><span className="rocket-nose" /><span className="rocket-body" /><span className="rocket-flame" /></div>
    <div className="challenge-top"><span>Level access / {stage}</span><FaLock /></div>
    <div className="challenge-copy"><p className="eyebrow">Cipher protocol</p><h2>{challengeTitles[stage]}</h2><p>Memorise the celestial glyph route. It vanishes in seconds. One incorrect transmission resets the access sequence.</p></div>
    <div className="challenge-puzzle"><div className={revealed ? 'cipher-display is-visible' : 'cipher-display'}>{revealed ? cipher.map((rune) => <span key={rune.id}>{rune.glyph}</span>) : <span className="cipher-hidden">Signal concealed — reconstruct the route</span>}</div><div className="progress-dots">{cipher.map((_, i) => <i className={i < entered.length ? 'filled' : ''} key={i} />)}</div><div className="tile-row">{choices.map((rune, index) => <button className={error ? 'challenge-tile error' : 'challenge-tile'} disabled={revealed} onClick={() => choose(rune.id)} key={rune.id}><b>{String(index + 1).padStart(2, '0')}</b><span>{rune.glyph}</span><small>{rune.name}</small></button>)}</div><p className={error ? 'challenge-hint wrong' : 'challenge-hint'}>{revealed ? 'Cipher transmission active. Memorise it.' : error ? 'Transmission lost. Start the sequence from the beginning.' : 'Select the runes in their exact transmitted order.'}</p></div>
  </section>
}

const challengeSets = {
  work: [
    { label: 'Algorithm trace', title: 'Binary search', prompt: 'The sorted array is [4, 8, 15, 16, 23, 42, 50]. Trace the midpoint indices (zero-based) while searching for 23.', visual: 'low = 0  /  high = 6  /  target = 23', options: ['3 -> 5 -> 4', '3 -> 4', '2 -> 4 -> 5'], answer: 0 },
    { label: 'Data structures', title: 'Stack discipline', prompt: 'What is the final stack, from bottom to top, after this sequence?', visual: 'push(A), push(B), pop(), push(C), push(D), pop()', options: ['A, C', 'A, B, D', 'A, C, D'], answer: 0 },
  ],
  experience: [
    { label: 'API protocol', title: 'HTTP semantics', prompt: 'A request has valid syntax, but the caller has not supplied valid credentials. Which response is correct?', visual: 'GET /v1/orders\nAuthorization: <missing>', options: ['403 Forbidden', '401 Unauthorized', '422 Unprocessable Content'], answer: 1 },
    { label: 'Database systems', title: 'Transaction control', prompt: 'Two customers attempt to buy the final item at the same time. Which mechanism prevents both orders from succeeding?', visual: 'stock = 1\ntransaction A  ||  transaction B', options: ['Row-level locking / transaction isolation', 'A frontend loading spinner', 'A larger API timeout'], answer: 0 },
  ],
  capabilities: [
    { label: 'Complexity analysis', title: 'Asymptotic cost', prompt: 'A loop halves n each iteration, and inside it performs n constant-time operations. What is the total complexity?', visual: 'while (n > 1) {\n  work();\n  n = n / 2;\n}', options: ['O(n log n)', 'O(n)', 'O(log n)'], answer: 1 },
    { label: 'Graph theory', title: 'Breadth-first search', prompt: 'Starting at A, visit neighbors left to right. Which node is first discovered at depth two?', visual: 'A -> [B, C]\nB -> [D, E]\nC -> [F]', options: ['B', 'D', 'F'], answer: 1 },
  ],
  contact: [
    { label: 'SQL reasoning', title: 'Relational query', prompt: 'Which clause filters grouped results, for example teams with more than five members?', visual: 'SELECT team, COUNT(*)\nFROM users\nGROUP BY team', options: ['WHERE COUNT(*) > 5', 'HAVING COUNT(*) > 5', 'ORDER BY COUNT(*) > 5'], answer: 1 },
    { label: 'Systems design', title: 'Cache strategy', prompt: 'For frequently read data that changes rarely, which pattern is generally the strongest first choice?', visual: 'read-heavy traffic\nrare writes\nlow-latency requirement', options: ['Cache-aside with invalidation on writes', 'Write every request directly to disk', 'Disable caching and add retries'], answer: 0 },
  ],
}

function CsChallenge({ stage, onUnlock, onSuccess }) {
  const puzzle = useMemo(() => {
    const variants = challengeSets[stage]
    return variants[Math.floor(Math.random() * variants.length)]
  }, [stage])
  const [error, setError] = useState(false)
  const choose = (index) => {
    if (index !== puzzle.answer) { setError(true); return }
    setError(false)
    onUnlock(stage)
    setTimeout(onSuccess, 180)
  }
  return <section className={`challenge cinematic-gate gate-${stage}`} id={`access-${stage}`} aria-label={`${puzzle.title} access challenge`}>
    <div className="star-field"><i /><i /><i /><i /><i /><i /></div><div className="gate-orb" />
    <div className="challenge-top"><span>Level access / {stage}</span><FaLock /></div>
    <div className="challenge-copy"><p className="eyebrow">{puzzle.label}</p><h2>{puzzle.title}</h2><p>{puzzle.prompt}</p></div>
    <div className="challenge-puzzle"><pre className="code-window"><code>{puzzle.visual}</code></pre><div className="tile-row">{puzzle.options.map((option, index) => <button className={error ? 'challenge-tile error' : 'challenge-tile'} onClick={() => choose(index)} key={option}><b>OPTION {String(index + 1).padStart(2, '0')}</b><span>{option}</span></button>)}</div><p className={error ? 'challenge-hint wrong' : 'challenge-hint'}>{error ? 'Incorrect. Re-evaluate the system behaviour and try again.' : 'Solve the problem to open this section.'}</p></div>
  </section>
}

const visualSets = {
  work: [
    { title: 'Complete the pattern', sequence: ['dots-1', 'triangle', 'dots-2', 'square', 'dots-3'], answer: 'pentagon', choices: ['hexagon', 'pentagon', 'triangle'] },
    { title: 'Complete the pattern', sequence: ['triangle', 'dots-1', 'square', 'dots-2', 'pentagon'], answer: 'dots-3', choices: ['dots-2', 'dots-4', 'dots-3'] },
  ],
  experience: [
    { title: 'Find the next rotation', sequence: ['arrow-up', 'arrow-right', 'arrow-down', 'arrow-left', 'arrow-up'], answer: 'arrow-right', choices: ['arrow-left', 'arrow-up', 'arrow-right'] },
    { title: 'Complete the motion', sequence: ['arrow-right', 'arrow-down', 'arrow-left', 'arrow-up', 'arrow-right'], answer: 'arrow-down', choices: ['arrow-down', 'arrow-up', 'arrow-left'] },
  ],
  capabilities: [
    { title: 'Complete the signal', sequence: ['ring-red', 'ring-blue', 'ring-gold', 'ring-blue', 'ring-red'], answer: 'ring-blue', choices: ['ring-red', 'ring-gold', 'ring-blue'] },
    { title: 'Complete the signal', sequence: ['ring-gold', 'ring-red', 'ring-blue', 'ring-red', 'ring-gold'], answer: 'ring-red', choices: ['ring-red', 'ring-blue', 'ring-gold'] },
  ],
  contact: [
    { title: 'Close the visual loop', sequence: ['stripe-a', 'stripe-b', 'stripe-c', 'stripe-a', 'stripe-b'], answer: 'stripe-c', choices: ['stripe-a', 'stripe-c', 'stripe-b'] },
    { title: 'Close the visual loop', sequence: ['dots-2', 'triangle', 'dots-3', 'square', 'dots-4'], answer: 'pentagon', choices: ['square', 'pentagon', 'hexagon'] },
  ],
}

function VisualMark({ type }) {
  if (type.startsWith('dots-')) return <span className={`visual-mark dot-mark ${type}`}>{Array.from({ length: Number(type.at(-1)) }, (_, index) => <i key={index} />)}</span>
  if (type.startsWith('arrow-')) return <span className={`visual-mark arrow-mark ${type}`}>&#10142;</span>
  return <span className={`visual-mark ${type}`} />
}

function VisualChallenge({ stage, onUnlock, onSuccess }) {
  const puzzle = useMemo(() => {
    const variants = visualSets[stage]
    return variants[Math.floor(Math.random() * variants.length)]
  }, [stage])
  const [error, setError] = useState(false)
  const solve = (choice) => {
    if (choice !== puzzle.answer) { setError(true); return }
    setError(false)
    onUnlock(stage)
    setTimeout(onSuccess, 180)
  }
  return <section className={`challenge visual-gate gate-${stage}`} id={`access-${stage}`} aria-label={`${puzzle.title} visual puzzle`}>
    <div className="star-field"><i /><i /><i /><i /><i /><i /></div><div className="gate-orb" />
    <div className="challenge-top"><span>Visual access / {stage}</span><FaLock /></div>
    <div className="challenge-copy"><p className="eyebrow">Visual reasoning</p><h2>{puzzle.title}</h2><p>Choose the symbol that belongs in the final panel.</p></div>
    <div className="challenge-puzzle"><div className="pattern-strip">{puzzle.sequence.map((shape, index) => <div className="pattern-cell" key={`${shape}-${index}`}><VisualMark type={shape} /></div>)}<div className="pattern-cell missing">?</div></div><div className="visual-choices">{puzzle.choices.map((shape, index) => <button className={error ? 'visual-choice error' : 'visual-choice'} onClick={() => solve(shape)} aria-label={`Option ${index + 1}`} key={`${shape}-${index}`}><VisualMark type={shape} /></button>)}</div><p className={error ? 'challenge-hint wrong' : 'challenge-hint'}>{error ? 'That breaks the visual rule. Try another tile.' : 'Select the tile that completes the sequence.'}</p></div>
  </section>
}

function AccessPrompt({ stage, onOpen }) {
  const names = { work: 'Selected work', experience: 'Experience', capabilities: 'Capabilities', contact: 'Contact' }
  return <section className="access-prompt" id={`access-${stage}`}><div><p className="eyebrow">Section locked</p><h2>Ready for<br />{names[stage]}?</h2><p>Solve one visual reasoning puzzle to access the next chapter.</p></div><button onClick={onOpen}>Unlock {names[stage]} <FaArrowUpRightFromSquare /></button></section>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [unlocked, setUnlocked] = useState({})
  const [activeGate, setActiveGate] = useState(null)
  const openAccess = (stage) => {
    setMenuOpen(false)
    if (unlocked[stage]) { document.getElementById(stage)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); return }
    const order = ['work', 'experience', 'capabilities', 'contact']
    const nextLocked = order.find((item) => !unlocked[item])
    setActiveGate(nextLocked)
    setTimeout(() => document.getElementById(`access-${nextLocked}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 30)
  }
  const unlock = (stage) => setUnlocked((current) => ({ ...current, [stage]: true }))
  const arrive = (stage) => { setActiveGate(null); setTimeout(() => document.getElementById(stage)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80) }
  return <div className="site-shell">
    <header className="site-header"><a className="wordmark" href="#top" aria-label="Manohar Jinka home">MJ<span>.</span></a><nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation"><button onClick={() => openAccess('work')}>Selected work</button><a href="#profile" onClick={() => setMenuOpen(false)}>Profile</a><button onClick={() => openAccess('contact')}>Contact</button><a className="resume-link" href="/images/Manohar_SoftwareEngineer_Resume.pdf" target="_blank" rel="noreferrer">Resume <FaArrowUpRightFromSquare /></a></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <FaXmark /> : <FaBars />}</button></header>
    <main id="top">
      <section className="hero" aria-labelledby="intro-title"><div className="hero-label"><span /> Available for software engineering opportunities</div><div className="hero-main"><p className="eyebrow">Software Engineer / Full-stack Developer</p><h1 id="intro-title">Manohar<br /><em>Jinka.</em></h1><p className="hero-title">Building useful digital systems.</p><div className="portrait-frame"><img src="/images/IMG-20250220-WA0023.jpg" alt="Manohar Jinka" /></div><div className="hero-detail"><p>Full-stack developer with a practical focus on reliable products, clear interfaces, and the engineering beneath them.</p><a className="text-link" href="#profile">Enter profile <FaArrowDown /></a></div></div><div className="hero-foot"><span>Based in Andhra Pradesh, India</span><span>2026 / Portfolio</span></div></section>
      <section className="statement" id="profile"><p className="section-index">01 / Profile</p><div><h2>Thoughtful engineering, from the first interface to the infrastructure behind it.</h2><p className="lead-copy">I am a Computer Science student and full-stack developer who enjoys making complex ideas feel simple to use. My work spans responsive front ends, dependable APIs, data-led features, and collaborative delivery.</p><div className="profile-meta"><div><span>Education</span><strong>B.Tech, Computer Science & Engineering</strong><p>Vasireddy Venkatadri Institute of Technology / 2022-2026 / CGPA 8.5 / 10</p></div><div><span>Recognition</span><strong>Adobe India Hackathon 2025 Finalist</strong><p>Top 100 finalist team nationally from 400,000+ participants</p></div></div></div></section>
      {!unlocked.work && (activeGate === 'work' ? <VisualChallenge stage="work" onUnlock={unlock} onSuccess={() => arrive('work')} /> : <AccessPrompt stage="work" onOpen={() => setActiveGate('work')} />)}
      {unlocked.work && <section className="work unlocked-section" id="work"><div className="section-heading"><p className="section-index">02 / Selected work</p><p>Three builds across microservices, AI, and community platforms.</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.number}><div className="project-number">{project.number}</div><div className="project-title"><p>{project.type}</p><h3>{project.title}</h3></div><div className="project-content"><p className="project-summary">{project.summary}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul><p className="stack">{project.stack}</p></div><div className="project-actions"><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><FaGithub /></a>{project.live && <a className="project-link live-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`View ${project.title} live demo`}><FaArrowUpRightFromSquare /></a>}</div></article>)}</div></section>}
      {unlocked.work && !unlocked.experience && (activeGate === 'experience' ? <VisualChallenge stage="experience" onUnlock={unlock} onSuccess={() => arrive('experience')} /> : <AccessPrompt stage="experience" onOpen={() => setActiveGate('experience')} />)}
      {unlocked.experience && <section className="experience unlocked-section" id="experience"><p className="section-index">03 / Experience</p><div><div className="experience-card"><div><p className="eyebrow">Feb 2025 - May 2025</p><h2>Software Engineer<br />Intern</h2></div><div><p className="company">AscendSkills / Remote</p><p>Shipped Node.js and Express REST API changes, cutting average response latency 30% through MongoDB compound indexing and connection pooling. Added validation and structured errors across 8 endpoints, versioned routing, and GitHub Actions checks for every pull request.</p></div></div><div className="open-source"><p className="eyebrow">Open source / Jun 2026</p><h3>ApostropheCMS <span>PR #5448 merged</span></h3><p>Diagnosed and fixed a static-asset URL issue in a production CMS under URL-prefixed deployments, then added regression coverage and incorporated maintainer review feedback.</p></div></div></section>}
      {unlocked.experience && !unlocked.capabilities && (activeGate === 'capabilities' ? <VisualChallenge stage="capabilities" onUnlock={unlock} onSuccess={() => arrive('capabilities')} /> : <AccessPrompt stage="capabilities" onOpen={() => setActiveGate('capabilities')} />)}
      {unlocked.capabilities && <section className="capabilities unlocked-section" id="capabilities"><div className="section-heading"><p className="section-index">04 / Capabilities</p><p>A focused toolkit, with foundations that travel well between projects.</p></div><div className="skill-grid">{skills.map(([label, value], index) => <div className="skill-row" key={label}><span>0{index + 1}</span><h3>{label}</h3><p>{value}</p></div>)}</div></section>}
      {unlocked.capabilities && !unlocked.contact && (activeGate === 'contact' ? <VisualChallenge stage="contact" onUnlock={unlock} onSuccess={() => arrive('contact')} /> : <AccessPrompt stage="contact" onOpen={() => setActiveGate('contact')} />)}
      {unlocked.contact && <section className="contact unlocked-section" id="contact"><p className="section-index">05 / Contact</p><div><p className="eyebrow">Have a role, an idea, or a problem worth solving?</p><h2>Let&apos;s make the next<br /><em>one count.</em></h2><a className="email-link" href="mailto:manoharjinka02@gmail.com">manoharjinka02@gmail.com <FaArrowUpRightFromSquare /></a></div><div className="socials"><a href="https://linkedin.com/in/manoharJinka" target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a><a href="https://github.com/Manohar2503" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://leetcode.com/u/ManoharJinka/" target="_blank" rel="noreferrer">LeetCode</a><a href="https://www.codechef.com/users/manu1431" target="_blank" rel="noreferrer">CodeChef</a><a href="tel:+919347343206">+91 93473 43206</a></div><p className="problem-count">600+ problems solved across LeetCode, GeeksforGeeks, CodeChef, and HackerRank.</p></section>}
    </main><footer><span>© {new Date().getFullYear()} Manohar Jinka</span><span>Designed with intent.</span></footer>
  </div>
}
export default App
