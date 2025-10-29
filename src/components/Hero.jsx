import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 flex-1"
        >
          <p className="text-secondary">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-textSecondary">
            Manohar Jinka
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-textPrimary">
            I build things for the web.
          </h2>
          <p className="max-w-2xl text-lg">
            I'm a full-stack developer with a passion for creating exceptional digital experiences.
            Currently focused on building responsive and accessible web applications
            while exploring new technologies.
          </p>
          <div className="pt-4">
            <a
              href="mailto:manoharjinka02@gmail.com"
              className="button-primary inline-block"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-64 h-64 rounded-full overflow-hidden gradient-border"
          >
            <motion.img
              src="/images/IMG-20250220-WA0023.jpg"
              alt="Manohar Jinka"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
