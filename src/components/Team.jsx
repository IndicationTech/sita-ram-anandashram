export default function Team() {
  const members = [
    ["/images/founder.jpg", "Vitthal Ramchandra Mayekar"],
    ["/images/trustee1.jpg", "Subhash Ramchandra Surve"],
    ["/images/trustee2.jpg", "Indumati Ganpat Mayekar"],
    ["/images/trustee3.jpg", "Sabaji Vitthal Patil"],
  ];

  return (
    <section id="team" className="section bg-[#f7f5f2]">
      <p className="uppercase tracking-[5px] text-primary font-bold">
        Founder & Trustees
      </p>

      <h2 className="font-heading text-6xl mt-5 font-bold">
        The people behind the <span className="text-primary">Anandashram.</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {members.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl overflow-hidden shadow-lg"
          >
            <img src={member[0]} className="h-[450px] w-full object-cover" />

            <div className="p-8">
              <p className="uppercase text-primary font-bold">Trustee</p>
              <h3 className="font-heading text-3xl mt-3 font-bold">
                {member[1]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
