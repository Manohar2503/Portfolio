import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-tertiary">
      <div className="max-w-7xl mx-auto text-center">
        <p className="flex items-center justify-center text-sm text-textPrimary">
          Built with{' '}
          <FaHeart className="w-4 h-4 mx-1 text-secondary" />{' '}
          using React & Tailwind CSS
        </p>
        <p className="text-sm text-textPrimary mt-2">
          © {new Date().getFullYear()} Manohar Jinka. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
