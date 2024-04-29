import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import User1 from "../assets/user1.jpg";
import User2 from "../assets/user2.jpg";
import User3 from "../assets/user3.jpg";
import User4 from "../assets/user4.jpg";
import User5 from "../assets/user5.jpg";
import User6 from "../assets/user6.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const Testimonial = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <h2

          className="text-4xl sm:text-7xl font-bold text-primary font-title text-center"
        >
          What Client Says
        </h2>
      </div>

      <div className="flex justify-center mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
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
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {/* Slider Item 1 */}
          <SwiperSlide className="rounded-xl p-5">
            <div className="shadow-custom h-[550px] rounded-3xl p-5 md:p-16">
              <div className="relative">
                <FaQuoteLeft size={50} className=" text-gray-300" />
                <p className="text-base text-gray-400 text-center p-4 md:px-8">
                  I recently purchased a home from Saku Estates, and I
                  couldn&apos;t be happier with my decision. From the moment I
                  contacted them, their team was incredibly responsive and
                  helpful. They guided me through every step of the home-buying
                  process and ensured that I found the perfect home for my
                  family.
                </p>
                <FaQuoteRight
                  size={50}
                  className="absolute -bottom-10 right-0 text-gray-300"
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <figure className="w-20 h-20 mt-8">
                  <img className="w-20 h-20 rounded-full" src={User1} alt="" />
                </figure>
                <div className="ml-5 mt-5">
                  <h2 className="text-xl font-semibold text-black">
                    Emily Johnson
                  </h2>
                  <p className="text-base text-gray-400 font-medium">
                    Marketing Manager
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider Item 2 */}
          <SwiperSlide className="rounded-xl p-5">
            <div className="shadow-custom h-[550px] rounded-3xl p-5 md:p-16">
              <div className="relative">
                <FaQuoteLeft size={50} className=" text-gray-300" />
                <p className="text-base text-gray-400 text-center p-4 md:px-8">
                  My experience with Saku Estates has been exceptional. The
                  website is user-friendly and provides detailed information
                  about their properties. I appreciated the virtual tours and
                  floor plans available online, which helped me narrow down my
                  choices before visiting in person. .
                </p>
                <FaQuoteRight
                  size={50}
                  className="absolute -bottom-10 right-0 text-gray-300"
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <figure className="w-20 h-20 mt-8">
                  <img className="w-20 h-20 rounded-full" src={User2} alt="" />
                </figure>
                <div className="ml-5 mt-5">
                  <h2 className="text-xl font-semibold text-black">
                    Michael Thompson
                  </h2>
                  <p className="text-base text-gray-400 font-medium">
                    Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider Item 3 */}
          <SwiperSlide className="rounded-xl p-5">
            <div className="shadow-custom h-[550px] rounded-3xl p-5 md:p-16">
              <div className="relative">
                <FaQuoteLeft size={50} className=" text-gray-300" />
                <p className="text-base text-gray-400 text-center p-4 md:px-8">
                  Saku Estates exceeded my expectations in every way. Their
                  properties are well-designed, modern, and located in desirable
                  neighborhoods. I was impressed by the variety of amenities
                  offered, including parks, walking trails, and community
                  centers
                </p>
                <FaQuoteRight
                  size={50}
                  className="absolute -bottom-10 right-0 text-gray-300"
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <figure className="w-20 h-20 mt-8">
                  <img className="w-20 h-20 rounded-full" src={User3} alt="" />
                </figure>
                <div className="ml-5 mt-5">
                  <h2 className="text-xl font-semibold text-black">
                    Samantha Lee
                  </h2>
                  <p className="text-base text-gray-400 font-medium">
                    Nurse Practitioner
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider Item 4 */}
          <SwiperSlide className="rounded-xl p-5">
            <div className="shadow-custom h-[550px] rounded-3xl p-5 md:p-16">
              <div className="relative">
                <FaQuoteLeft size={50} className=" text-gray-300" />
                <p className="text-base text-gray-400 text-center p-4 md:px-8">
                  I&apos;ve had the pleasure of living in a Saku Estates
                  property for the past year, and it has been a fantastic
                  experience. The neighborhood is peaceful and well-maintained,
                  with beautiful landscaping and friendly neighbors
                </p>
                <FaQuoteRight
                  size={50}
                  className="absolute -bottom-10 right-0 text-gray-300"
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <figure className="w-20 h-20 mt-8">
                  <img className="w-20 h-20 rounded-full" src={User4} alt="" />
                </figure>
                <div className="ml-5 mt-5">
                  <h2 className="text-xl font-semibold text-black">
                    Daniel Smith
                  </h2>
                  <p className="text-base text-gray-400 font-medium">
                    Small Business Owner
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider Item 5 */}
          <SwiperSlide className="rounded-xl p-5">
            <div className="shadow-custom h-[550px] rounded-3xl p-5 md:p-16">
              <div className="relative">
                <FaQuoteLeft size={50} className=" text-gray-300" />
                <p className="text-base text-gray-400 text-center p-4 md:px-8">
                  Saku Estates sets the standard for luxury living. From the
                  moment you enter their properties, you&apos;re greeted with
                  elegance and sophistication. The attention to detail in the
                  design and construction is evident, and the finishes are of
                  the highest quality.
                </p>
                <FaQuoteRight
                  size={50}
                  className="absolute -bottom-10 right-0 text-gray-300"
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <figure className="w-20 h-20 mt-8">
                  <img className="w-20 h-20 rounded-full" src={User5} alt="" />
                </figure>
                <div className="ml-5 mt-5">
                  <h2 className="text-xl font-semibold text-black">
                    Jennifer Williams
                  </h2>
                  <p className="text-base text-gray-400 font-medium">
                    Financial Analyst
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slider Item 6  */}
          <SwiperSlide className="rounded-xl p-5">
            <div className="shadow-custom h-[550px] rounded-3xl p-5 md:p-16">
              <div className="relative">
                <FaQuoteLeft size={50} className=" text-gray-300" />
                <p className="text-base text-gray-400 text-center p-4 md:px-8">
                  I stumbled upon your website while researching properties in
                  the area, and I must say, I was thoroughly impressed. The
                  layout is intuitive, the navigation is seamless, and the
                  content is informative. Your virtual tours and photo galleries
                  provide a comprehensive view of the properties, making it easy
                  for potential buyers like myself to visualize the spaces
                </p>
                <FaQuoteRight
                  size={50}
                  className="absolute -bottom-10 right-0 text-gray-300"
                />
              </div>

              <div className="flex items-center justify-center mt-10">
                <figure className="w-20 h-20 mt-8">
                  <img className="w-20 h-20 rounded-full" src={User6} alt="" />
                </figure>
                <div className="ml-5 mt-5">
                  <h2 className="text-xl font-semibold text-black">
                    David Martinez
                  </h2>
                  <p className="text-base text-gray-400 font-medium">
                    High School Teacher
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
