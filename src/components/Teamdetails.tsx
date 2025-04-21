import shobimg from "../assets/shobhanteam.png";
import raghavimg from "../assets/raghav.jpg";
import Sharath from "../assets/sharath.jpg";
import Sujay from "../assets/Sujay.jpg";
const teamMembers = [
  {
    name: "Sharath",
    role: "Client Management",
    desc: "",
    img: Sharath, // Replace with real image
  },
  {
    name: "Shobhan",
    role: "Web Developer",
    desc: "",
    img: shobimg,
  },
  {
    name: "Sujay",
    role: "UI/UX Designer",
    desc: "",
    img: Sujay,
  },
  {
    name: "Raghav",
    role: "Consultant",
    desc: "",
    img: raghavimg,
  },
];

const TeamSection = () => {
  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-black mb-2">MEET OUR TEAM</h2>
      <p className="text-gray-600 mb-10 font-sans">Professional Team Member</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[300px] object-cover rounded"
            />
            <h3 className="mt-4 font-semibold text-lg text-black">
              {member.name}
            </h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="text-xs text-gray-500 mt-2 max-w-xs">{member.desc}</p>
            <div className="flex gap-4 mt-3">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-pink-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-sky-400">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
