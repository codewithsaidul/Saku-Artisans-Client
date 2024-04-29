
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CraftCategoryNameCard = ({ craftCat }) => {

    const {subCategory_name, image} = craftCat



  return (
    <div>
      <Link to={`/craftItemsCategory/${subCategory_name}`}>
        <div className="card h-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} className="w-full h-72" alt="category image" />
          </figure>
          <div className="py-5 px-3 text-center">
            <h2 className="text-3xl text-primary font-title font-semibold ">
              {subCategory_name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};



CraftCategoryNameCard.propTypes = {
  craftCat: PropTypes.object,
};
export default CraftCategoryNameCard