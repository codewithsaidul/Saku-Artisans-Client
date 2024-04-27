import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyCraftList = ({ craft }) => {

  
  const { item_name, image, price, rating, customization, stockStatus } = craft;


  return (
    <div>
      {" "}
      <div className="flex flex-col h-auto bg-base-100 shadow-xl border-2 rounded-3xl border-transparent hover:border-primary duration-1000 hover:scale-105">
        <figure>
          <img className="w-full h-64 rounded-t-3xl" src={image} alt="craft" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold text-primary font-title">
            {item_name}
          </h2>

          {/* Price & Rating */}
          <div>
            <p className="text-lg text-gray-500 font-normal">
              Price :{" "}
              <span className="text-primary font-title font-semibold">
                {price}
              </span>
            </p>
            <p className="text-lg text-gray-500 font-normal">
              Rating :{" "}
              <span className="text-primary font-title font-semibold">
                {rating}
              </span>
            </p>
          </div>

          {/* customizen & stock status */}
          <div>
            <h4 className="text-lg text-gray-500 font-normal">
              Customization :{" "}
              <span className="text-primary font-title font-semibold">
                {customization}
              </span>
            </h4>

            <h4 className="text-lg text-gray-500 font-normal">
              Stock Status :{" "}
              <span className="text-primary font-title font-semibold">
                {stockStatus}
              </span>
            </h4>
          </div>

          <div className="mt-auto flex justify-between">
            <Link to={`/allCraftsItem`}>
              <button className="bg-red-500 py-2 px-5 border border-red-500 hover:text-black hover:bg-transparent duration-1000 rounded-full text-white text-lg font-medium">
                Delete
              </button>
            </Link>

            <Link to={`/allCraftsItem`}>
              <button className="bg-primary py-2 px-5 border border-primary hover:text-black hover:bg-transparent duration-1000 rounded-full text-white text-lg font-medium">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



MyCraftList.propTypes = {
  craft: PropTypes.object,
};


export default MyCraftList;
