// testimonial slider data
export const testimonialSlider = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

//
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {/* Avatar, name, position */}
              <div>
                <div>
                  {/* avatar */}
                  <div>Avatar image</div>
                  {/* name */}
                  <div>Name</div>
                  {/* position */}
                  <div>position</div>
                  {/* quote and message */}
                  <div className="bg-pink-500/10 flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                    {/* quote icon */}
                    <div className="mb-4">
                      <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 max-auto md:mx-0" />
                    </div>
                    {/* message */}
                    <div className="xl:text-lg">{person.message}</div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
