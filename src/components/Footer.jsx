export default function Footer() {
  return (
    <footer id="footer" className="bg-[#220600] text-white px-6 md:px-20 py-20">
      <div className="grid md:grid-cols-4 gap-16">
        <div>
          <img src="/images/logo.png" className="w-16" />

          <h3 className="font-heading text-3xl mt-6 font-bold">
            Sita Ram Sanjivani
          </h3>

          <p className="mt-6 text-gray-300 leading-8">
            A registered charitable trust providing dignified living for senior
            citizens.
          </p>
        </div>

        <div>
          <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold">
            Address
          </h4>

          <p className="mt-6 leading-9 text-gray-300">
            Mhapan-Vengurla Road,
            <br />
            Sindhudurg, Maharashtra
          </p>
        </div>

        <div>
          <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold">
            Contact
          </h4>

          <p className="mt-6 leading-9 text-gray-300">
            +91 93236 59257
            <br />
            +91 83291 06774
          </p>
        </div>

        <div>
          <h4 className="uppercase text-yellow-400 tracking-[4px] font-bold">
            Quick Links
          </h4>

          <div className="mt-6 flex flex-col gap-4 text-gray-300">
            <a href="#about">About</a>
            <a href="#services">Our Work</a>
            <a href="#team">Team</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-20 pt-10 text-gray-400">
        © 2026 Sita Ram Sanjivani Anandashram. All rights reserved.
      </div>
    </footer>
  );
}
