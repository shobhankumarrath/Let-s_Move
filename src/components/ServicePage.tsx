import { FaCode, FaMobileAlt, FaPencilRuler, FaBullhorn } from "react-icons/fa";
import teamDiscussionImg from "../assets/teamdiscussion.avif";

const OurServices = () => {
  return (
    <section id="service" className="py-20 bg-white text-gray-900">
      <div className="text-center mb-12">
        <h4 className="text-sm tracking-widest text-gray-500 font-medium">
          OUR SERVICES
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          EXPLORE WHAT SERVICES WE’RE OFFERING
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* Left - Image with stats */}
        <div className="relative">
          <img
            src={teamDiscussionImg}
            alt="Team discussion"
            className="rounded-lg shadow-lg w-full"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-4 flex justify-between gap-6 rounded shadow-md text-black w-[90%]">
            <div className="text-center">
              <p className="text-xl font-bold">20+</p>
              <p className="text-sm">Team member</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">9+</p>
              <p className="text-sm">Client review</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">10+</p>
              <p className="text-sm">Complete project</p>
            </div>
          </div>
        </div>

        {/* Right - Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCode size={30} />,
              title: "Web development",
              description:
                "Our Business Plan is a written document describing a company's core business activities.",
            },
            {
              icon: <FaPencilRuler size={30} />,
              title: "UI/UX Designer",
              description:
                "UI/UX design service provider. Our primary goal is to create user-friendly digital products.",
            },
            {
              icon: <FaMobileAlt size={30} />,
              title: "App development",
              description:
                "UI/UX design service provider. Our primary goal is to create user-friendly and visually appealing apps.",
            },
            {
              icon: <FaBullhorn size={30} />,
              title: "Social Media Management",
              description:
                "Our SEO service is a comprehensive approach to improving your website's reach.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              <div className="text-yellow-400 mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
