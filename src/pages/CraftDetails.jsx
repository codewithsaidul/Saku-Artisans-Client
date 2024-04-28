import { Link, useLoaderData } from "react-router-dom";
import BGImg from '../assets/slide1.jpg'

const CraftDetails = () => {

  const craft = useLoaderData();


  return (
    <div>
      <div className="relative w-full">
        <figure className="w-full hero ">
          <img className="w-full h-44" src={BGImg} alt="" />
          <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
        </figure>

        <div className="absolute top-16 md:top-10 left-0 right-0 text-center md:p-10">
          <h3 className="text-3xl font-medium text-white">
            <Link to="/" className="text-primary font-semibold">
              Home
            </Link>{" "}
            / Craft Details
          </h3>
        </div>
      </div>

      <div className="artsContainer mt-16">
        <div className="flex flex-col lg:flex-row gap-2 h-auto bg-base-100 shadow-xl border-2 rounded-3xl border-transparent hover:border-primary duration-1000 hover:scale-95">
          <figure className="w-full lg:w-[40%] h-fit">
            <img
              className="w-full h-[355px] max-[1023px]:rounded-t-3xl lg:rounded-l-3xl"
              src={craft.imageUrl}
              alt="craft"
            />
          </figure>
          <div className="py-10 px-5 space-y-3">
            <h2 className="text-3xl font-normal text-gray-500 font-title">
              Item Name :
              <span className="text-4xl ml-3 font-semibold text-primary font-title">
                {craft.itemeName}
              </span>
            </h2>

            <p className="text-2xl font-normal text-gray-500 font-title">
              Category :
              <span className="font-title font-semibold text-primary ml-3">
                {craft.subCategory}
              </span>
            </p>

            <p className="text-base font-normal text-gray-400 w-full md:w-[600px]">
              {craft.shortDescription}
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-7">
              <p className="text-lg text-gray-500 font-normal">
                Price :{" "}
                <span className="text-primary text-xl font-title font-semibold">
                  ${craft.price}
                </span>
              </p>
              <p className="text-lg text-gray-500 font-normal">
                Rating :{" "}
                <span className="text-primary text-xl font-title font-semibold">
                  {craft.rating}
                </span>
              </p>

              <h4 className="text-lg text-gray-500 font-normal">
                Processing Time:{" "}
                <span className="text-primary text-xl font-title font-semibold">
                  {craft.processingTime}
                </span>
              </h4>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-7">
              <h4 className="text-lg text-gray-500 font-normal">
                Customization :{" "}
                <span className="text-primary text-3xl font-title font-semibold">
                  {craft.customization}
                </span>
              </h4>

              <h4 className="text-lg text-gray-500 font-normal">
                Stock Status :{" "}
                <span className="text-primary text-3xl font-title font-semibold">
                  {craft.stockStatus}
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
