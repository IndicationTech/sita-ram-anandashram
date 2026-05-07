// export default function About() {
//   return (
//     <section id="about" className="section bg-[#f7f5f2]">
//       <div className="grid md:grid-cols-2 gap-20">
//         <div>
//           <p className="uppercase text-primary tracking-[5px] font-bold">
//             About The Ashram
//           </p>

//           <h2 className="font-heading text-6xl mt-5 leading-tight font-bold">
//             A place that gives <span className="text-primary">eternal joy</span>
//             in Sindhudurg.
//           </h2>

//           <p className="text-xl text-gray-700 mt-10 leading-10">
//             Sita Ram Sanjivani Anandashram is the only destination in Sindhudurg
//             district built with every modern facility — designed so elders can
//             live in clean, free, fragrant surroundings with dignity and joy.
//             Around 1,200 people will be hosted on this expansive campus. Through
//             eco‑friendly initiatives, sustainable systems, and warm human care,
//             we are creating a true second home — not just a shelter.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-6">
//           {[
//             ["78", "Halls being built"],
//             ["81", "Two-bed rooms"],
//             ["51", "AC rooms"],
//             ["8", "VIP Suites"],
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-10 rounded-3xl border border-orange-100"
//             >
//               <h1 className="text-6xl font-heading text-primary font-bold">
//                 {item[0]}
//               </h1>
//               <p className="mt-3 text-xl">{item[1]}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const stats = [
  ["78", "Halls being built"],
  ["81", "Two-bed rooms"],
  ["51", "AC rooms"],
  ["8", "VIP Suites"],
];

export default function About() {
  return (
    <section id="about" className="section bg-[#f7f5f2] overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="uppercase text-primary tracking-[4px] sm:tracking-[6px] font-bold text-sm sm:text-base">
            About The Ashram
          </p>

          <h2 className="font-heading mt-4 leading-tight font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            A place that gives <span className="text-primary">eternal joy</span>
            <br className="hidden md:block" />
            in Sindhudurg.
          </h2>

          <p className="text-gray-700 mt-6 sm:mt-8 leading-8 sm:leading-10 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            Sita Ram Sanjivani Anandashram is the only destination in Sindhudurg
            district built with every modern facility — designed so elders can
            live in clean, free, fragrant surroundings with dignity and joy.
            Around 1,200 people will be hosted on this expansive campus. Through
            eco-friendly initiatives, sustainable systems, and warm human care,
            we are creating a true second home — not just a shelter.
          </p>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white p-7 sm:p-8 lg:p-10 rounded-3xl border border-orange-100 shadow-lg hover:shadow-xl transition-all text-center sm:text-left"
            >
              <h1 className="font-heading text-primary font-bold text-4xl sm:text-5xl lg:text-6xl">
                {item[0]}
              </h1>

              <p className="mt-3 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
