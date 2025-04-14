import Homepage from "./components/Homepage";
import MissionVision from "./components/Missionvision";
import Navbar from "./components/Navbar";
import ServicePage from "./components/ServicePage";
import TestimonialSlider from "./components/testimonial";
import TeamDetails from "./components/Teamdetails";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <ServicePage />
      <MissionVision />
      <TeamDetails />
      <TestimonialSlider />
    </>
  );
}

export default App;
