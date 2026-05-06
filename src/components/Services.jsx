import {
  FaHome,
  FaLeaf,
  FaSolarPanel,
  FaTint,
  FaAmbulance,
  FaParking,
} from "react-icons/fa";

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
    <section id="services" className="section">
      <p className="uppercase tracking-[5px] text-primary font-bold">
        What We Do
      </p>

      <h2 className="font-heading text-6xl leading-tight mt-5 font-bold max-w-5xl">
        A complete ecosystem of <span className="text-primary">care</span>,
        comfort & community.
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-10 rounded-3xl border border-gray-200 hover:shadow-xl transition"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-primary text-2xl">
              {service.icon}
            </div>

            <h3 className="font-heading text-3xl mt-8 font-bold">
              {service.title}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              Providing high-quality facilities and peaceful living for elders.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
