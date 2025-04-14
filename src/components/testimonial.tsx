import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // 👈 Add Autoplay
import "swiper/css";
import "swiper/css/pagination";

import userImg from "../assets/beinsured.png"; // Update the path accordingly

const testimonials = [
  {
    name: "Be Insured",
    message:
      "Clients find us proactive and approachable, resulting in positive digital marketing feedback.",
    img: userImg,
  },
  {
    name: "Man Power",
    message:
      "We're known for proactive, accessible service, driving successful digital marketing and website outcomes.",
    //img: userImg,
  },
  {
    name: "Rakibul Hasan",
    message: "A well deserved website development",
    // img: userImg,
  },
];

const TestimonialSlider = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <h2 className="text-center text-yellow-400 text-2xl font-bold mb-2">
        WHAT OUR CLIENTS SAY?
      </h2>
      <p className="text-center text-sm text-gray-300 mb-8">
        CLIENT TESTIMONIAL
      </p>

      <Swiper
        modules={[Pagination, Autoplay]} // 👈 Include Autoplay
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }} // 👈 Auto slide every 4s
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white text-black rounded-xl p-6 flex items-center space-x-6">
              <img
                src={client.img}
                alt={client.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{client.name}</h3>
                <div className="flex gap-1 text-yellow-400">★★★★★</div>
                <p className="text-sm text-gray-700 mt-1">{client.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
