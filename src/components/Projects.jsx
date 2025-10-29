import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      name: "IntelliPDF",
      description: [
        "Built a scalable full-stack app using React/Python with Adobe PDF Embed API and Docker for real-time rendering.",
        "Integrated Gemini's LLM and TTS engines for narrated AI recommendations and summaries.",
        "Achieved 90%+ test coverage through unit and integration testing."
      ],
      tech: ["React", "FastAPI", "Docker", "LLM"],
      github: "https://github.com/Manohar2503/IntelliPdf.git"
    },
    {
      name: "Air Quality Prediction",
      description: [
        "Developed ML model with Pandas, Matplotlib, and Plotly to predict air quality (PM2.5, PM10, NO₂, SO₂).",
        "Achieved 85%+ prediction accuracy through optimization methods.",
        "Improved dashboard performance by 30% and added interactive visualizations."
      ],
      tech: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
      github: "https://github.com/Manohar2503/Air_Quality"
    },
    {
      name: "Alumni Engagement",
      description: [
        "Built a full-stack platform with job listings, events, and mentorship modules.",
        "Implemented knowledge sharing for 5+ career categories using REST APIs and MongoDB.",
        "Designed secure authentication and authorization for 100+ users."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/Manohar2503/Alumni_collaborate"
    }
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textSecondary mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tertiary p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-textSecondary">
                    {project.name}
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textPrimary hover:text-secondary transition-colors duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-sm text-textPrimary">
                      {desc}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-secondary bg-secondary/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
