import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer Intern",
      company: "AscendSkills",
      duration: "Feb 2025 – May 2025",
      responsibilities: [
        "Developed full stack web applications with course management and job portal modules.",
        "Created secure RESTful APIs with CRUD operations and implemented unit/integration testing.",
        "Worked in an agile team using Git for version control, code reviews, and best practices."
      ]
    }
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-tertiary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textSecondary mb-8">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute w-4 h-4 bg-secondary rounded-full -left-[9px] top-0"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-textSecondary">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-secondary">{exp.company}</p>
                  <p className="text-sm text-textPrimary">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-textPrimary">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
