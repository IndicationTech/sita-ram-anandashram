export default function About() {
  return (
    <section id="about" className="section bg-[#f7f5f2]">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <p className="uppercase text-primary tracking-[5px] font-bold">
            About The Ashram
          </p>

          <h2 className="font-heading text-6xl mt-5 leading-tight font-bold">
            A place that gives <span className="text-primary">eternal joy</span>
            in Sindhudurg.
          </h2>

          <p className="text-xl text-gray-700 mt-10 leading-10">
            Sita Ram Sanjivani Anandashram is the only destination in Sindhudurg
            district built with every modern facility — designed so elders can
            live in clean, free, fragrant surroundings with dignity and joy.
            Around 1,200 people will be hosted on this expansive campus. Through
            eco‑friendly initiatives, sustainable systems, and warm human care,
            we are creating a true second home — not just a shelter.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[
            ["78", "Halls being built"],
            ["81", "Two-bed rooms"],
            ["51", "AC rooms"],
            ["8", "VIP Suites"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl border border-orange-100"
            >
              <h1 className="text-6xl font-heading text-primary font-bold">
                {item[0]}
              </h1>
              <p className="mt-3 text-xl">{item[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
