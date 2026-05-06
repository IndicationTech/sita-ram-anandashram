export default function Donate() {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  return (
    <section className="section bg-gradient-to-r from-[#7c1d00] to-[#cf4a00] text-white">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <p className="uppercase tracking-[5px] font-bold">
            Support Our Mission
          </p>

          <h2 className="font-heading text-6xl mt-8 leading-tight font-bold">
            Your generosity gives our elders a tomorrow filled with joy.
          </h2>

          <p className="mt-10 text-xl leading-10">
            Every contribution helps us provide food, shelter, healthcare and
            love to senior citizens.
          </p>
        </div>

        <div className="bg-white text-black p-10 rounded-[40px]">
          <h3 className="font-heading text-4xl font-bold mb-10">
            Account Details
          </h3>

          {[
            ["Account Name", "Sitaram Sanjivani Anandashram"],
            ["Account Number", "10882203525"],
            ["IFSC Code", "SBIN0004880"],
            ["Bank", "State Bank of India"],
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b py-6"
            >
              <div>
                <p className="text-gray-500 uppercase">{item[0]}</p>
                <h4 className="text-2xl mt-2">{item[1]}</h4>
              </div>

              <button
                onClick={() => copyText(item[1])}
                className="bg-orange-100 text-primary px-5 py-2 rounded-full"
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
