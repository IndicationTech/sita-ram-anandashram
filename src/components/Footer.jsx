// export default function Footer() {
//   return (
//     <footer id="footer" className="bg-[#220600] text-white px-6 md:px-20 py-20">
//       <div className="grid md:grid-cols-4 gap-16">
//         <div>
//           <img src="/images/logo.png" className="w-16" />

//           <h3 className="font-heading text-3xl mt-6 font-bold">
//             Sita Ram Sanjivani
//           </h3>

//           <p className="mt-6 text-gray-300 leading-8">
//             A registered charitable trust providing dignified living for senior
//             citizens.
//           </p>
//         </div>

//         <div>
//           <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold">
//             Address
//           </h4>

//           <p className="mt-6 leading-9 text-gray-300">
//             Mhapan-Vengurla Road,
//             <br />
//             Sindhudurg, Maharashtra
//           </p>
//         </div>

//         <div>
//           <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold">
//             Contact
//           </h4>

//           <p className="mt-6 leading-9 text-gray-300">
//             +91 93236 59257
//             <br />
//             +91 83291 06774
//           </p>
//         </div>

//         <div>
//           <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold">
//             Quick Links
//           </h4>

//           <div className="mt-6 flex flex-col gap-4 text-gray-300">
//             <a href="#about">About</a>
//             <a href="#services">Our Work</a>
//             <a href="#team">Team</a>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-700 mt-20 pt-10 text-gray-400">
//         © 2026 Sita Ram Sanjivani Anandashram. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { name: "About", href: "/#about" },
    { name: "Our Work", href: "/#services" },
    { name: "Team", href: "/#team" },
    { name: "Donate", href: "/donate" },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-[#220600] text-white overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="section relative z-10">
        {/* top line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent mb-12 sm:mb-16"
        />

        {/* main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {/* brand */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/logo.png" alt="Logo" className="w-16 sm:w-20" />

            <h3 className="font-heading text-2xl sm:text-3xl mt-5 font-bold">
              Sita Ram Sanjivani
            </h3>

            <p className="mt-5 text-gray-300 leading-8 text-sm sm:text-base">
              A registered charitable trust dedicated to providing dignified,
              peaceful, and compassionate living for senior citizens.
            </p>
          </motion.div>

          {/* address */}
          {/* address */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold text-sm flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary shrink-0" />
              Address
            </h4>

            <div className="mt-6">
              <p className="leading-8 text-gray-300 text-sm sm:text-base">
                Mhapan–Vengurla Road,
                <br />
                Sindhudurg, Maharashtra
              </p>
            </div>
          </motion.div>

          {/* contact */}
          {/* contact */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold text-sm flex items-center gap-2">
              <FaPhoneAlt className="text-primary shrink-0" />
              Contact
            </h4>

            <div className="mt-6">
              <p className="leading-8 text-gray-300 text-sm sm:text-base">
                +91 93236 59257
                <br />
                +91 83291 06774
              </p>
            </div>
          </motion.div>

          {/* links */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold text-sm">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              {links.map((link, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <FaArrowRight className="text-primary text-xs shrink-0" />
                  <Link to={link.href}>{link.name}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="border-t border-white/10 mt-14 sm:mt-20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-gray-400"
        >
          <p className="text-center sm:text-left">
            © 2026 Sita Ram Sanjivani Anandashram. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with <FaHeart className="text-primary" /> for elders
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            y: -4,
            scale: 1.08,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="
    fixed
    bottom-6
    right-6
    sm:bottom-8
    sm:right-8
    z-50
    w-12
    h-12
    sm:w-14
    sm:h-14
    rounded-full
    bg-primary
    text-white
    shadow-2xl
    flex
    items-center
    justify-center
    hover:shadow-orange-500/40
    transition-all
  "
        >
          <FaArrowUp className="text-sm sm:text-base" />
        </motion.button>
      </div>
    </footer>
  );
}
