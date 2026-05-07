import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-[#f5efe6] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt=""
              className="w-14 h-14 rounded-lg"
            />

            <div>
              <h1 className="font-heading text-lg sm:text-2xl font-bold leading-tight">
                Sita Ram Sanjivani
              </h1>
              <p className="text-primary uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm">
                Anandashram
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-10 font-medium">
            <Link to="/#home">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#services">Our Work</Link>
            <Link to="/#team">Team</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/#footer">Contact</Link>
          </div>

          <a
            href="tel:+919323659257"
            className="hidden md:flex bg-primary text-white px-6 py-3 rounded-full items-center gap-2 shadow-lg"
          >
            <FaPhoneAlt />
            +91 93236 59257
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-xs font-semibold text-primary border border-primary/30"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <AiOutlineClose /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 font-medium pt-2">
              <Link to="/#home" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/#about" onClick={closeMenu}>
                About
              </Link>
              <Link to="/#services" onClick={closeMenu}>
                Our Work
              </Link>
              <Link to="/#team" onClick={closeMenu}>
                Team
              </Link>
              <Link to="/donate" onClick={closeMenu}>
                Donate
              </Link>
              <Link to="/#footer" onClick={closeMenu}>
                Contact
              </Link>
              <a
                href="tel:+919323659257"
                className="bg-primary text-white px-5 py-3 rounded-full inline-flex w-fit items-center gap-2 shadow-lg mt-1"
              >
                <FaPhoneAlt />
                +91 93236 59257
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
