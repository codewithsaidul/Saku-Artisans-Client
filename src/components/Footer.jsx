import { Link } from 'react-router-dom';
import bgImage from '../assets/Moon.svg'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundImage: `url(${bgImage})` }}
        className="py-32 px-8 md:px-12 lg:px-20 text-gray-400 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center lg:items-start gap-10"
      >
        <aside className="flex flex-col items-center text-center gap-5">
          <Link to="/" className="text-primary text-4xl font-bold">
            SakuArtisans
          </Link>

          <div className="flex flex-col items-center gap-3">
            <p className="flex items-center gap-3">
              <FaPhone size={20} />
              +880 1345440000
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope size={20} />
              sakuartisans@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaLocationDot size={20} />
              XYZ California, USA
            </p>
          </div>
        </aside>

        <nav className="flex flex-col items-center gap-5">
          <h6 className="text-white text-2xl font-bold">Quick Links</h6>
          <Link
            to="/"
            className="text-gray-400 font-semibold text-base hover:text-primary"
          >
            Home
          </Link>

          <Link
            to="/allCraftsItem"
            className="text-gray-400 font-semibold text-base hover:text-primary"
          >
            All Crafts Item
          </Link>

          <Link
            to="/addCraftsItem"
            className="text-gray-400 font-semibold text-base hover:text-primary"
          >
            Add Crafts Item
          </Link>

          <Link
            to="/myCraftsList"
            className="text-gray-400 font-semibold text-base hover:text-primary"
          >
            My Crafts List
          </Link>
        </nav>

        <nav className="flex flex-col gap-5 items-center">
          <h6 className="text-white text-2xl font-bold">Social Media</h6>

          <div className="flex gap-5">
            <a
              href="https://facebook.com/codewithsaidulwr"
              target="_blank"
              className="text-xl p-3 rounded-full bg-transparent border border-primary text-primary hover:text-white hover:bg-primary hover:border-transparent duration-1000 hover:duration-1000"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/codewithsaidul"
              target="_blank"
              className="text-xl p-3 rounded-full bg-transparent border border-primary text-primary hover:text-white hover:bg-primary hover:border-transparent duration-1000 hover:duration-1000"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/codewithsaidul"
              target="_blank"
              className="text-xl p-3 rounded-full bg-transparent border border-primary text-primary hover:text-white hover:bg-primary hover:border-transparent duration-1000 hover:duration-1000"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/codewithsaidul"
              target="_blank"
              className="text-xl p-3 rounded-full bg-transparent border border-primary text-primary hover:text-white hover:bg-primary hover:border-transparent duration-1000 hover:duration-1000"
            >
              <FaGithub />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default Footer