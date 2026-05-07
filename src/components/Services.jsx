// import {
//   FaHome,
//   FaLeaf,
//   FaSolarPanel,
//   FaTint,
//   FaAmbulance,
//   FaParking,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaHome />,
//     title: "Residential Halls",
//   },
//   {
//     icon: <FaLeaf />,
//     title: "Vegetarian Restaurant",
//   },
//   {
//     icon: <FaSolarPanel />,
//     title: "Solar Energy",
//   },
//   {
//     icon: <FaTint />,
//     title: "Rainwater Harvesting",
//   },
//   {
//     icon: <FaAmbulance />,
//     title: "Medical Aid",
//   },
//   {
//     icon: <FaParking />,
//     title: "Vehicle Parking",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="section">
//       <p className="uppercase tracking-[5px] text-primary font-bold">
//         What We Do
//       </p>

//       <h2 className="font-heading text-6xl leading-tight mt-5 font-bold max-w-5xl">
//         A complete ecosystem of <span className="text-primary">care</span>,
//         comfort & community.
//       </h2>

//       <div className="grid md:grid-cols-3 gap-8 mt-16">
//         {services.map((service, i) => (
//           <div
//             key={i}
//             className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-xl transition"
//           >
//             <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-primary text-2xl">
//               {service.icon}
//             </div>

//             <h3 className="font-heading text-3xl mt-8 font-bold">
//               {service.title}
//             </h3>

//             <p className="mt-5 text-gray-600 leading-8">
//               Providing high-quality facilities and peaceful living for elders.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import {
  FaHome,
  FaLeaf,
  FaSolarPanel,
  FaTint,
  FaAmbulance,
  FaParking,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaHome />,
    title: "Residential Halls",
  },
  {
    icon: <FaLeaf />,
    title: "Vegetarian Restaurant",
  },
  {
    icon: <FaSolarPanel />,
    title: "Solar Energy",
  },
  {
    icon: <FaTint />,
    title: "Rainwater Harvesting",
  },
  {
    icon: <FaAmbulance />,
    title: "Medical Aid",
  },
  {
    icon: <FaParking />,
    title: "Vehicle Parking",
  },
];

export default function Services() {
  return (
    <section id="services" className="section bg-[#faf8f5] overflow-hidden">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-5xl mx-auto"
      >
        <p className="uppercase tracking-[4px] sm:tracking-[6px] text-primary font-bold text-sm sm:text-base">
          What We Do
        </p>

        <h2 className="font-heading mt-4 sm:mt-5 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          A complete ecosystem of <span className="text-primary">care</span>,
          <br className="hidden sm:block" />
          comfort & community.
        </h2>
      </motion.div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
            }}
            whileHover={{
              y: -10,
            }}
            className="bg-white p-7 sm:p-8 lg:p-10 rounded-3xl border border-orange-100 shadow-md hover:shadow-2xl transition-all text-center sm:text-left group"
          >
            {/* icon */}
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
              className="w-16 h-16 sm:w-18 sm:h-18 mx-auto sm:mx-0 bg-orange-100 rounded-2xl flex items-center justify-center text-primary text-2xl sm:text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300"
            >
              {service.icon}
            </motion.div>

            {/* title */}
            <h3 className="font-heading font-bold mt-6 sm:mt-8 text-2xl sm:text-3xl">
              {service.title}
            </h3>

            {/* desc */}
            <p className="mt-4 sm:mt-5 text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
              Providing high-quality facilities, compassionate support, and
              peaceful living for elders in a nurturing environment.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
