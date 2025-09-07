import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="max-w-[1440px] container mx-auto px-4 py-28 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-8">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-heading-text leading-tight">
            Join the commuity of IT professionals in{" "}
            <br className="lg:block hidden" />
            El Paso, Texas
          </h1>
          <p className="text-primary-text text-lg leading-relaxed max-w-xl">
            Our goal is to help establish a IT community in the El Paso,TX area.
            The community can oraganize Meetups and Workshops to assist the
            community in developing their skills.
          </p>
          <button className="bg-primary text-white px-12 py-4 rounded-lg hover:bg-red-600 shadow-lg hover:shadow-xl transition duration-300 text-lg font-medium cursor-pointer">
            Register
          </button>
        </div>
        {/* Right Content */}
        <div className="md:w-1/2">
          <img
            src="/images/programmer-desk.jpg"
            alt="Programmers at a desk"
            className="w-full rounded-2xl"
          />
        </div>
      </section>
    </div>
  );
}
