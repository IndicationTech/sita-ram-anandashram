import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="section grid md:grid-cols-2 gap-16 items-center"
    >
      <div>
        <span className="border border-orange-200 px-6 py-2 rounded-full text-sm">
          REG. NO. 3/23/SINDHUDURG — EST. 2008
        </span>

        <h1 className="font-heading text-6xl md:text-7xl leading-tight mt-8 font-bold">
          A home where <span className="text-primary">elders</span> find joy,
          dignity & belonging.
        </h1>

        <p className="text-xl mt-8 text-gray-700 leading-9">
          Sita Ram Sanjivani Anandashram is a modern sanctuary built for elders
          to live peacefully with dignity and comfort.
        </p>

        <div className="flex gap-5 mt-10">
          <Link
            to="/donate"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            Donate Now
          </Link>

          <a
            href="#about"
            className="border border-orange-300 px-8 py-4 rounded-full text-lg"
          >
            Learn More
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <img
          src="/images/hero.png"
          className="rounded-[40px] shadow-2xl w-full h-[700px] object-cover"
        />
      </motion.div>
    </section>
  );
}
