import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      text: "manoharjinka02@gmail.com",
      href: "mailto:manoharjinka02@gmail.com"
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      text: "+91 9347343206",
      href: "tel:+919347343206"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/manoharJinka"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      text: "GitHub",
      href: "https://github.com/Manohar2503"
    }
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-textSecondary mb-8">Get In Touch</h2>
          <p className="max-w-2xl mx-auto mb-12 text-lg text-textPrimary">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center space-x-3 p-4 bg-tertiary rounded-lg hover:bg-secondary/10 transition-colors duration-300"
              >
                <span className="text-secondary">{info.icon}</span>
                <span className="text-textPrimary hover:text-secondary">
                  {info.text}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
