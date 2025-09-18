import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-screen-width px-4 py-10 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-8">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-heading-text leading-tight">
            Join the commuity of IT Professionals in{" "}
            <br className="lg:block hidden" />
            El Paso, Texas
          </h1>
          <p className="text-primary-text text-lg leading-relaxed max-w-xl">
            Our goal is to establish a community of Information Technology
            Professionals in the El Paso,TX Metro Area. Together we can
            oraganize Meetups, Hosts Workshops, and build Open Source projects
            for the community.
          </p>
          <button className="bg-primary text-white px-12 py-4 rounded-lg hover:bg-red-600 shadow-lg hover:shadow-xl transition duration-300 text-lg font-medium cursor-pointer">
            Register
          </button>
        </div>
        {/* Right Content */}
        <div className="md:pb-10 md:w-1/2">
          <Image
            src="/images/programmer-desk.jpg"
            alt="Programmers at a desk"
            width={200}
            height={200}
            className="w-full rounded-2xl"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="max-screen-width px-5 md:px-20 py-5 flex flex-row md:flex-row gap-12 justify-between bg-gray-200 rounded-xl">
        <div className="flex items-center justify-center flex-col">
          <div className="text-sm md:text-2xl font-bold">200+</div>
          <div className="text-sm md:text-xl font-bold">Members</div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-sm md:text-2xl font-bold">90+</div>
          <div className="text-sm md:text-xl font-bold">Workshops</div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="text-sm md:text-2xl font-bold">30+</div>
          <div className="text-sm md:text-xl font-bold">Community Projects</div>
        </div>
      </section>
      <section className="max-screen-width px-4 py-5 flex items-stretch flex-col md:flex-row gap-12 justify-between">
        <div className="overflow-y-auto md:max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            className="w-full h-1/2"
            src="/images/meetup.jpg"
            alt="Organize Meetups"
            width={400}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Organize Meetups</div>
            <p className="text-gray-700 text-xl">
              Network with members of the IT community.
            </p>
          </div>
        </div>

        <div className="overflow-y-auto md:max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            className="w-full h-1/2"
            src="/images/workshops.jpg"
            alt="Host Workshops"
            width={400}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Host Workshops</div>
            <p className="text-gray-700 text-xl">
              Spread your knowledge and demonstrate your skills by hosting
              workshops.
            </p>
          </div>
        </div>

        <div className="overflow-y-auto md:max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <Image
            className="w-full h-1/2"
            src="/images/contrib-opensource.jpg"
            alt="Contribute to Open Source"
            width={400}
            height={400}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Build and Contribute to local Open Source Projects
            </div>
            <p className="text-gray-700 text-xl">
              Build and contribute to local Open Source projects to help the
              community such as building websites for local businesses.
            </p>
          </div>
        </div>
      </section>
      {/* News / Upcomming Events */}
      <section className="max-screen-width px-4 py-10 flex flex-col md:flex-row gap-12">
        {/* Left Content */}
        <div className="md:pb-10 md:w-1/2">
          <h1 className="lg:text-2xl md:text-3lg text-2xl font-bold text-heading-text">
            Upcoming Workshops
          </h1>
          <hr className="mt-2 mb-5 border-1 border-gray-300" />
          <div className="flex flex-row md:flex-col gap-2">
            {/* Card */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col bg-gray-700 text-white font-bold text-center justify-center p-2">
                <div className="">20</div>
                <div className="">September</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">
                  Maximizing your LinkedIn Profile
                </div>
                <div className="font-bold text-gray-400">
                  Hosted by: Erin Lopez
                </div>
                <div className="">WED, 8:00PM MDT</div>
                <div className="">40 Going</div>
              </div>
            </div>
            {/* Card */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col bg-gray-700 text-white font-bold text-center justify-center p-2">
                <div className="">21</div>
                <div className="">September</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">Improving your Job Search</div>
                <div className="font-bold text-gray-400">
                  Hosted by: Robert Gonzalez
                </div>
                <div className="">THUR, 8:00PM MDT</div>
                <div className="">10 Going</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Content */}
        <div className="md:pb-10 md:w-1/2">
          <h1 className="lg:text-2xl md:text-3lg text-2xl font-bold text-heading-text">
            Upcoming Meetups
          </h1>
          <hr className="mt-2 mb-5 border-1 border-gray-300" />
          <div className="flex flex-row md:flex-col gap-2">
            {/* Card */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col bg-gray-700 text-white font-bold text-center justify-center p-2">
                <div className="">04</div>
                <div className="">September</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">
                  Gettings Started with iOS Development
                </div>
                <div className="font-bold text-gray-400">
                  Hosted by: iOS Developers Group
                </div>
                <div className="">MON, 7:00PM MDT</div>
                <div className="">13 Going</div>
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col bg-gray-700 text-white font-bold text-center justify-center p-2">
                <div className="">15</div>
                <div className="">September</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">Tailwind Crash Course</div>
                <div className="font-bold text-gray-400">
                  Hosted by: Web Developers Group
                </div>
                <div className="">FRI, 7:00PM MDT</div>
                <div className="">20 Going</div>
              </div>
            </div>

            {/* Card */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col bg-gray-700 text-white font-bold text-center justify-center p-2">
                <div className="">25</div>
                <div className="">September</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold">React Fundamentals</div>
                <div className="font-bold text-gray-400">
                  Hosted by: React Developer Group Group
                </div>
                <div className="">MON, 7:00PM MDT</div>
                <div className="">40 Going</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
