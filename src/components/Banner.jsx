import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../assets/slide1.jpg'
import slider2 from '../assets/slide2.jpg'
import slider3 from '../assets/slide3.jpg'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import { Link } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* Banner Slider One */}
        <SwiperSlide>
          <div className="relative w-full">
            <figure className="w-full hero rounded-lg">
              <img
                className="h-[300px] w-full md:h-[600px] rounded-lg"
                src={slider1}
                alt=""
              />
              <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
            </figure>

            <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-5 w-full md:w-[800px] mx-auto">
                <span className="text-primary font-title text-4xl md:text-8xl">
                  Handcrafted
                </span>{" "}
                Eco-Friendly Creations for Sustainable Living
              </h1>

              <Link to="/allCraftsItem">
                <button className="py-2 px-5 border border-primary  text-white bg-transparent hover:bg-primary hover:border hover:border-primary hover:duration-1000 rounded-full duration-1000">
                  See All Craft Items
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Banner Slider Two */}
        <SwiperSlide>
          <div className="relative">
            <figure className="w-full hero rounded-lg">
              <img
                className="h-[300px] w-full md:h-[600px] rounded-lg"
                src={slider2}
                alt=""
              />
              <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
            </figure>

            <div className="absolute top-16 md:top-28 left-0 right-0 text-center md:p-10">
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-5 w-full md:w-[800px] mx-auto">
                Discover Timeless Beauty in{" "}
                <span className="text-primary font-title text-4xl md:text-8xl">
                  Jute & Wood
                </span>{" "}
                Artisanal Crafts
              </h1>

              <Link to="/allCraftsItem">
                <button className="py-2 px-5 border border-primary  text-white bg-transparent hover:bg-primary hover:border hover:border-primary hover:duration-1000 rounded-full duration-1000">
                  See All Craft Items
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Banner Slider Three */}
        <SwiperSlide>
          <div className="relative">
            <figure className="w-full hero rounded-lg">
              <img
                className="h-[300px] w-full md:h-[600px] rounded-lg"
                src={slider3}
                alt=""
              />
              <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
            </figure>

            <div className="absolute top-16 md:top-28 left-0 right-0 text-center px-3 md:p-10">
              <h1 className="text-2xl md:text-6xl font-bold text-white mb-5 w-full md:w-[800px] mx-auto">
                Explore Rustic{" "}
                <span className="text-primary font-title text-4xl md:text-8xl">
                  Sophistication
                </span>{" "}
                with Our Unique Collection
              </h1>

              <Link to="/allCraftsItem">
                <button className="py-2 px-5 border border-primary  text-white bg-transparent hover:bg-primary hover:border hover:border-primary hover:duration-1000 rounded-full duration-1000">
                  See All Craft Items
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
