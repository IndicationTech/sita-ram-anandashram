// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const containerVariants = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section
//       id="home"
//       className="section grid md:grid-cols-2 gap-6 lg:gap-10 items-center"
//     >
//       <motion.div variants={containerVariants} initial="hidden" animate="show">
//         <motion.span
//           variants={itemVariants}
//           className="inline-block border border-orange-200 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm tracking-wide"
//         >
//           REG. NO. 3/23/SINDHUDURG - EST. 2008
//         </motion.span>

//         <motion.h1
//           variants={itemVariants}
//           className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mt-6 sm:mt-8 font-bold"
//         >
//           A home where <span className="text-primary">elders</span> find joy,
//           dignity & belonging.
//         </motion.h1>

//         <motion.p
//           variants={itemVariants}
//           className="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 text-gray-700 leading-7 sm:leading-8 lg:leading-9 max-w-2xl"
//         >
//           Sita Ram Sanjivani Anandashram is a modern sanctuary built for elders
//           to live peacefully with dignity and comfort.
//         </motion.p>

//         <motion.div
//           variants={itemVariants}
//           className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10"
//         >
//           <motion.div
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full sm:w-auto"
//           >
//             <Link
//               to="/donate"
//               className="w-full sm:w-[180px] bg-primary text-white border px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg inline-flex justify-center"
//             >
//               Donate Now
//             </Link>
//           </motion.div>

//           <motion.a
//             whileHover={{ y: -2 }}
//             whileTap={{ scale: 0.98 }}
//             href="#about"
//             className="w-full sm:w-[180px] border border-orange-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg inline-flex justify-center"
//           >
//             Learn More
//           </motion.a>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 40, scale: 0.98 }}
//         animate={{ opacity: 1, x: 0, scale: 1 }}
//         transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
//       >
//         <img
//           src="/images/hero.png"
//           alt="Elders living joyfully at Sita Ram Sanjivani Anandashram"
//           className="rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] shadow-2xl w-full h-[320px] sm:h-[460px] lg:h-[640px] object-cover"
//         />
//       </motion.div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    ["1200+", "Residents Capacity"],
    ["2008", "Established"],
    ["24/7", "Care & Support"],
  ];

  return (
    <section
      id="home"
      className="section grid lg:grid-cols-2 gap-14 lg:gap-20 items-center min-h-screen relative overflow-hidden"
    >
      {/* soft background */}
      <div className="absolute top-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full bg-orange-100 blur-3xl opacity-60" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[280px] w-[280px] rounded-full bg-primary/10 blur-3xl opacity-60" />

      {/* LEFT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center lg:text-left"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block border border-orange-200 bg-white/70 backdrop-blur-sm px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm tracking-[2px] font-medium shadow-sm"
        >
          REG. NO. 3/23/SINDHUDURG • EST. 2008
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="font-heading mt-6 leading-[1.1] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
        >
          A home where <span className="text-primary">elders</span>
          <br />
          find joy, dignity
          <br />& belonging.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-700 mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-8 sm:leading-9 max-w-2xl mx-auto lg:mx-0"
        >
          Sita Ram Sanjivani Anandashram is a thoughtfully designed sanctuary
          where elders experience peaceful living, compassionate care,
          meaningful companionship, and a life filled with dignity.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              to="/donate"
              className="w-full sm:w-[190px] bg-primary text-white py-4 rounded-full text-base sm:text-lg inline-flex justify-center font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Donate Now
            </Link>
          </motion.div>

          <motion.a
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            className="w-full sm:w-[190px] border border-orange-300 bg-white py-4 rounded-full text-base sm:text-lg inline-flex justify-center font-medium hover:border-primary hover:text-primary transition-all"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14 pt-8 border-t border-orange-100"
        >
          {stats.map((item, i) => (
            <div key={i}>
              <h3 className="font-heading text-primary text-2xl sm:text-3xl lg:text-4xl font-bold">
                {item[0]}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {item[1]}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10"
      >
        <motion.img
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="/images/hero.png"
          alt="Elders living joyfully at Sita Ram Sanjivani Anandashram"
          className="rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] shadow-2xl w-full h-[320px] sm:h-[460px] lg:h-[650px] object-cover"
        />

        <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white shadow-xl rounded-3xl px-5 py-4 border border-orange-100">
          <p className="text-sm text-gray-500">Serving with care</p>
          <h4 className="font-semibold text-lg text-primary">
            Compassion • Dignity • Peace
          </h4>
        </div>
      </motion.div>
    </section>
  );
}
