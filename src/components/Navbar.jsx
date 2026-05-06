import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#f5efe6] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="" className="w-14 h-14 rounded-lg" />

          <div>
            <h1 className="font-heading text-2xl font-bold">
              Sita Ram Sanjivani
            </h1>
            <p className="text-primary uppercase tracking-[4px] text-sm">
              Anandashram
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-10 font-medium">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Our Work</a>
          <a href="#team">Team</a>
          <Link to="/donate">Donate</Link>
          <a href="#footer">Contact</a>
        </div>

        <a
          href="tel:+919323659257"
          className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
        >
          <FaPhoneAlt />
          +91 93236 59257
        </a>
      </div>
    </nav>
  );
}
