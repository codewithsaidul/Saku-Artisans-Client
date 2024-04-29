import { Link, useLoaderData } from "react-router-dom"
import CraftCategoryItem from "../components/CraftCategoryItem";
import BGImg from "../assets/slide1.jpg";


const CraftCategoryItems = () => {


    const craftCategoryItems = useLoaderData();
    

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
            / Sub Category of Craft Item
          </h3>
        </div>
      </div>

      <div className="artsContainer">
        <h2 className="text-4xl sm:text-7xl text-center text-primary font-title font-bold mt-10 mb-24">
          {craftCategoryItems.slice(0, 1).map((craft) => craft.subCategory)}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {craftCategoryItems.map((craftCategoryItem) => (
            <CraftCategoryItem
              key={craftCategoryItem._id}
              craftCategoryItem={craftCategoryItem}
            ></CraftCategoryItem>
          ))}
        </div>
      </div>
    </div>
  );

}

export default CraftCategoryItems