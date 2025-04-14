import Homepage from "./components/Homepage";
import MissionVision from "./components/Missionvision";
import Navbar from "./components/Navbar";
import ServicePage from "./components/ServicePage";
import TestimonialSlider from "./components/testimonial";
import TeamDetails from "./components/Teamdetails";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <ServicePage />
      <MissionVision />
      <TeamDetails />
      <TestimonialSlider />
      <LatestNews />
      <Footer />
    </>
  );
}

export default App;
