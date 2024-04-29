import PropTypes from 'prop-types';
import demoImg from "../assets/Moon.svg";
import { Link } from 'react-router-dom';

const CraftCategoryItem = ({ craftCategoryItem }) => {

    const { _id, itemeName, imageUrl, price, rating, stockStatus } =
      craftCategoryItem;

  return (
    <div>
      {" "}
      <div className="flex flex-col h-[550px] bg-base-100 shadow-xl border-2 rounded-3xl border-transparent hover:border-primary duration-1000 hover:scale-105">
        <figure>
          <img
            className="w-full h-64 rounded-t-3xl"
            src={craftCategoryItem?.imageUrl ? imageUrl : demoImg}
            alt="craft"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold text-primary font-title">
            {itemeName}
          </h2>

          <div>
            <p className="text-lg text-gray-500 font-normal">
              Price :{" "}
              <span className="text-primary text-xl font-title font-semibold">
                ${price}
              </span>
            </p>
            <p className="text-lg text-gray-500 font-normal">
              Rating :{" "}
              <span className="text-primary text-xl font-title font-semibold">
                {rating}
              </span>
            </p>
          </div>

          <h4 className="text-lg text-gray-500 font-normal">
            Stock Status :{" "}
            <span className="text-primary text-xl font-title font-semibold">
              {stockStatus}
            </span>
          </h4>

          <div className="mt-auto">
            <Link to={`/allCraftsItem/${_id}`}>
              <button className="bg-primary w-full p-2 border border-primary hover:text-black hover:bg-transparent duration-1000 rounded-full text-white text-xl font-medium">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


CraftCategoryItem.propTypes = {
  craftCategoryItem: PropTypes.object
};

export default CraftCategoryItem