import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-textSecondary mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-textPrimary">
              <p>
                I'm currently pursuing my Bachelor's degree in Computer Science and Engineering
                at Vasireddy Venkatadri Institute Of Technology, maintaining a strong GPA of 8.34/10.
              </p>
              <p>
                As a Full-Stack Developer Intern at AscendSkills, I gained hands-on experience
                in developing web applications, working with RESTful APIs, and collaborating
                in an agile team environment.
              </p>
              <p>
                I'm passionate about creating efficient, scalable, and user-friendly applications
                that solve real-world problems. My experience ranges from front-end development
                using React.js to back-end development with Node.js and Python.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, participating in
                hackathons, and contributing to open-source projects. I'm always eager to
                learn and take on new challenges in the ever-evolving tech landscape.
              </p>
            </div>
            <div className="flex justify-center items-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                <div className="relative w-64 h-64 overflow-hidden rounded-lg bg-tertiary flex items-center justify-center">
                  <div className="text-6xl text-secondary font-bold">MJ</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
