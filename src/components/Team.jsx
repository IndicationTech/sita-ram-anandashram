// export default function Team() {
//   const members = [
//     ["/images/founder.jpg", "Vitthal Ramchandra Mayekar"],
//     ["/images/trustee1.jpg", "Subhash Ramchandra Surve"],
//     ["/images/trustee2.jpg", "Indumati Ganpat Mayekar"],
//     ["/images/trustee3.jpg", "Sabaji Vitthal Patil"],
//   ];

//   return (
//     <section id="team" className="section bg-[#f7f5f2]">
//       <p className="uppercase tracking-[5px] text-primary font-bold">
//         Founder & Trustees
//       </p>

//       <h2 className="font-heading text-6xl mt-5 font-bold">
//         The people behind the <span className="text-primary">Anandashram.</span>
//       </h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
//         {members.map((member, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-3xl overflow-hidden shadow-lg"
//           >
//             <img src={member[0]} className="h-[450px] w-full object-cover" />

//             <div className="p-8">
//               <p className="uppercase text-primary font-bold">Trustee</p>
//               <h3 className="font-heading text-3xl mt-3 font-bold">
//                 {member[1]}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";

export default function Team() {
  const members = [
    {
      image: "/images/founder.jpg",
      name: "Vitthal Ramchandra Mayekar",
      role: "Founder",
    },
    {
      image: "/images/trustee1.jpg",
      name: "Subhash Ramchandra Surve",
      role: "Trustee",
    },
    {
      image: "/images/trustee2.jpg",
      name: "Indumati Ganpat Mayekar",
      role: "Trustee",
    },
    {
      image: "/images/trustee3.jpg",
      name: "Sabaji Vitthal Patil",
      role: "Trustee",
    },
  ];

  return (
    <section id="team" className="section bg-[#f7f5f2] overflow-hidden">
      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="uppercase tracking-[5px] text-primary font-bold text-sm sm:text-base">
          Founder & Trustees
        </p>

        <h2 className="font-heading mt-4 leading-tight font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          The people behind the{" "}
          <span className="text-primary">Anandashram</span>
        </h2>

        <p className="mt-5 text-gray-600 text-base sm:text-lg lg:text-xl leading-8 max-w-2xl mx-auto">
          Dedicated people building a peaceful and dignified home for elders.
        </p>
      </motion.div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-10 mt-14 lg:mt-20 max-w-7xl mx-auto">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: i * 0.12,
            }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-orange-100">
              {/* desktop horizontal card */}
              <div className="lg:flex">
                {/* image */}
                <div className="relative lg:w-[42%] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[320px] sm:h-[420px] lg:h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold text-primary shadow-md">
                    {member.role}
                  </div>
                </div>

                {/* content */}
                <div className="lg:w-[58%] p-7 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                    {member.name}
                  </h3>

                  <div className="w-20 h-[3px] bg-primary mt-5 rounded-full" />

                  <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg">
                    Serving Anandashram with compassion, leadership, and a
                    commitment to creating a warm, respectful, and joyful home
                    for elders.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
