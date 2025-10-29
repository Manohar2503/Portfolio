import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "SQL", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Computer Science",
      skills: ["OOP", "Data Structures and Algorithms", "Operating Systems", "Computer Networks"]
    },
    {
      title: "Soft Skills",
      skills: ["Collaboration", "Communication", "Leadership", "Problem-Solving"]
    }
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-tertiary"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textSecondary mb-8">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary p-6 rounded-lg border border-secondary/20"
              >
                <h3 className="text-lg font-semibold text-textSecondary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-secondary bg-secondary/10 px-3 py-1 rounded-full"
                    >
                      {skill}
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

export default Skills
