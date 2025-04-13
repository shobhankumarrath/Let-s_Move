import { useState } from "react";
import missionImg from "../assets/missionvisionpic1.png";
import visionImg from "../assets/ourvision.avif";

const MissionVision = () => {
  // State for toggling the modal visibility
  const [showMissionModal, setShowMissionModal] = useState(false);
  const [showVisionModal, setShowVisionModal] = useState(false);

  // Function to handle the opening and closing of the modal
  const toggleMissionModal = () => {
    setShowMissionModal(!showMissionModal);
  };

  const toggleVisionModal = () => {
    setShowVisionModal(!showVisionModal);
  };

  return (
    <section id="aboutus" className="bg-black py-16 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-400 uppercase">
          Our Mission and Vision
        </h2>
        <p className="mt-2 text-sm text-gray-400">
          Strive not to be a success, but rather to be of value.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-center px-6 lg:px-20">
        {/* Mission Card */}
        <div className="relative group">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full lg:w-[500px] rounded-md"
          />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6 rounded-md">
            <button
              onClick={toggleMissionModal}
              className="text-yellow-400 text-xl font-bold absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:underline"
            >
              Read Now →
            </button>
            <p className="text-white text-sm font-medium mt-12"></p>
          </div>
        </div>

        {/* Vision Card */}
        <div className="relative group">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full lg:w-[500px] rounded-md"
          />
          <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-end p-6 rounded-md">
            <button
              onClick={toggleVisionModal}
              className="text-yellow-400 text-xl font-bold absolute bottom-4 left-1/2 transform -translate-x-1/2 hover:underline"
            >
              Read Now →
            </button>
          </div>
        </div>
      </div>

      {/* Mission Modal */}
      {showMissionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-md max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-sm mb-6">
              Our mission is to create a platform that connects professionals
              across the globe, empowering them to collaborate and achieve their
              fullest potential in their respective fields. We aim to create a
              network that fosters growth, learning, and success through
              meaningful interactions.
            </p>
            <button
              onClick={toggleMissionModal}
              className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Vision Modal */}
      {showVisionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white text-black p-8 rounded-md max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-sm mb-6">
              Our vision is to lead the way in creating a global community of
              professionals who are motivated by shared goals. We aim to
              revolutionize the way people interact professionally, making it
              easier for them to collaborate, share knowledge, and contribute to
              the greater good of their industries and society.
            </p>
            <button
              onClick={toggleVisionModal}
              className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-yellow-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MissionVision;
