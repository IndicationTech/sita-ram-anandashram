// export default function Donate() {
//   const copyText = (text) => {
//     navigator.clipboard.writeText(text);
//     alert("Copied!");
//   };

//   return (
//     <section className="section bg-gradient-to-r from-[#7c1d00] to-[#cf4a00] text-white">
//       <div className="grid md:grid-cols-2 gap-20">
//         <div>
//           <p className="uppercase tracking-[5px] font-bold">
//             Support Our Mission
//           </p>

//           <h2 className="font-heading text-6xl mt-8 leading-tight font-bold">
//             Your generosity gives our elders a tomorrow filled with joy.
//           </h2>

//           <p className="mt-10 text-xl leading-10">
//             Every contribution helps us provide food, shelter, healthcare and
//             love to senior citizens.
//           </p>
//         </div>

//         <div className="bg-white text-black p-10 rounded-[40px]">
//           <h3 className="font-heading text-4xl font-bold mb-10">
//             Account Details
//           </h3>

//           {[
//             ["Account Name", "Sitaram Sanjivani Anandashram"],
//             ["Account Number", "10882203525"],
//             ["IFSC Code", "SBIN0004880"],
//             ["Bank", "State Bank of India"],
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="flex items-center justify-between border-b py-6"
//             >
//               <div>
//                 <p className="text-gray-500 uppercase">{item[0]}</p>
//                 <h4 className="text-2xl mt-2">{item[1]}</h4>
//               </div>

//               <button
//                 onClick={() => copyText(item[1])}
//                 className="bg-orange-100 text-primary px-5 py-2 rounded-full"
//               >
//                 Copy
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { FaCopy, FaHeart } from "react-icons/fa";

export default function Donate() {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const accountDetails = [
    ["Account Name", "Sitaram Sanjivani Anandashram"],
    ["Account Number", "10882203525"],
    ["IFSC Code", "SBIN0004880"],
    ["Bank", "State Bank of India"],
  ];

  return (
    <section id="donate" className="section bg-gradient-to-br from-[#7c1d00] via-[#a83000] to-[#cf4a00] text-white overflow-hidden relative">
      {/* background blur */}
      <div className="absolute top-[-120px] right-[-100px] h-[280px] w-[280px] rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-100px] h-[260px] w-[260px] rounded-full bg-orange-300/20 blur-3xl" />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center relative z-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] font-bold text-sm sm:text-base opacity-90">
            Support Our Mission
          </p>

          <h2 className="font-heading mt-5 sm:mt-7 leading-tight font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Your generosity gives
            <span className="block text-orange-200">
              our elders a brighter tomorrow
            </span>
          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-8 sm:leading-10 text-white/90 max-w-2xl mx-auto lg:mx-0">
            Every contribution helps us provide food, shelter, healthcare,
            dignity, and compassionate care to senior citizens who deserve a
            peaceful and loving home.
          </p>

          {/* badge */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 mt-8 sm:mt-10 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 rounded-2xl"
          >
            <FaHeart className="text-orange-200 text-lg" />
            <span className="text-sm sm:text-base">
              Every donation directly supports elder care
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/95 backdrop-blur-xl text-black rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/40"
        >
          <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            Account Details
          </h3>

          <div className="space-y-4">
            {accountDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-orange-100 rounded-2xl px-5 py-5 hover:shadow-lg transition-all"
              >
                <div className="min-w-0">
                  <p className="text-gray-500 uppercase text-xs sm:text-sm tracking-wide">
                    {item[0]}
                  </p>

                  <h4 className="mt-2 text-base sm:text-lg lg:text-xl font-semibold break-words">
                    {item[1]}
                  </h4>
                </div>

                <motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ y: -2 }}
                  onClick={() => copyText(item[1])}
                  className="shrink-0 inline-flex items-center justify-center gap-2 bg-orange-100 text-primary px-5 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
                >
                  <FaCopy />
                  Copy
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-orange-100" />
            <span className="text-xs sm:text-sm uppercase tracking-wide text-gray-400 font-semibold">
              Or Scan &amp; Pay via UPI
            </span>
            <div className="h-px flex-1 bg-orange-100" />
          </div>

          {/* UPI QR code */}
          <div className="flex flex-col items-center">
            <div className="rounded-2xl border border-orange-100 p-3 sm:p-4 shadow-sm bg-white">
              <img
                src="/images/donate-qr.png"
                alt="Scan to donate via UPI - Sitaram Sanjeevani Anandashram"
                className="w-48 sm:w-56 h-auto rounded-lg"
              />
            </div>

            <div className="mt-5 flex items-center gap-3 bg-orange-50 rounded-full pl-5 pr-2 py-2">
              <span className="text-sm sm:text-base font-medium text-gray-700 break-all">
                sitaramsanjeevani@srcb
              </span>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -2 }}
                onClick={() => copyText("sitaramsanjeevani@srcb")}
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-all"
              >
                <FaCopy />
                Copy
              </motion.button>
            </div>
          </div>

          {/* note */}
          <p className="mt-6 text-sm sm:text-base text-gray-500 text-center">
            Thank you for supporting our mission ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
