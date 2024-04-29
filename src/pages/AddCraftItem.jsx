import Swal from "sweetalert2";
import BG from "../assets/Moon.svg";
import useAuth from '../hooks/useAuth'

const AddCraftItem = () => {

  const {user} = useAuth()

  const handleAddItems = (e) => {
    e.preventDefault();

    const form = e.target;
    const itemeName = form.item_name.value;
    const subCategory = form.sub_category.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const rating = form.rating.value;
    const processingTime = form.processing_time.value;
    const imageUrl = form.img_url.value;
    const stockStatus = form.stock_status.value;
    const shortDescription = form.short_description.value;
    const email = user.email;
    const userName = user.displayName;

    form.reset();

    const craftData = {
      userName,
      email,
      itemeName,
      subCategory,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      imageUrl,
      shortDescription,
    };

    fetch("https://assignment-server-flame.vercel.app/allCraftItems", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(craftData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Arts & Craft Items Added Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    })
  };

  return (
    <div>
      {" "}
      <div
        className="w-full min-h-screen flex justify-center items-center px-5"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom my-10 rounded-xl w-full md:w-[70%]">
          <h2 className="text-4xl text-center mt-7 font-bold text-primary font-title mb-16">
            Add New Craft Item
          </h2>
          <form
            onSubmit={handleAddItems}
            className="px-5 w-full md:py-10 mb-10 text-gray-400"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* group 1 item nae */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Item Name
                </label>
                <input
                  type="text"
                  name="item_name"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                  placeholder="Enter Item Name"
                  required
                />
              </div>

              {/* group 2 sub category */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Sub Category
                </label>
                <select
                  name="sub_category"
                  required
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-500"
                >
                  <option value="Wooden Furniture & Sculptures">
                    Wooden Furniture & Sculptures
                  </option>
                  <option value="Wooden Home Decor">Wooden Home Decor</option>
                  <option value="Wooden Utensils and Kitchenware">
                    Wooden Utensils and Kitchenware
                  </option>
                  <option value="Jute Home Decor">Jute Home Decor</option>
                  <option value="Jute Kitchenware & utensils">
                    Jute Kitchenware & utensils
                  </option>
                  <option value="Jute and wooden jewellery">
                    Jute and wooden jewellery
                  </option>
                </select>
              </div>

              {/* group 3 price */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                  placeholder="Enter Item Price"
                  required
                />
              </div>

              {/* group 4  rating */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                  placeholder="Enter Item Rating"
                  required
                />
              </div>

              {/* group 5 photo url */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Image URL
                </label>
                <input
                  type="text"
                  name="img_url"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                  placeholder="Enter Item Image URL"
                  required
                />
              </div>

              {/* group 6 Customization */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Customization
                </label>
                <select
                  name="customization"
                  required
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-500"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* group 7 Proccessing Time */}
              <div className="flex flex-col gap-2">
                <label>Proccessing Time</label>
                <select
                  name="processing_time"
                  required
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-500"
                >
                  <option value="1 - 3 Days">1 - 3 Days</option>
                  <option value="3 - 5 Days">3 - 5 Days</option>
                  <option value="5 - 7 Days">5 - 7 Days</option>
                  <option value="8 - 10 Days">8 - 10 Days</option>
                  <option value="10 - 15 Days">10 - 15 Days</option>
                </select>
              </div>

              {/* group 8 Stock Status */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Stock Status
                </label>
                <select
                  required
                  name="stock_status"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-500"
                >
                  <option value="in_stock">IN Stock</option>
                  <option value="made_order">Made to Order</option>
                </select>
              </div>
            </div>

            {/* group 9 */}
            <div className="flex flex-col gap-2 w-full mt-8">
              <label className="text-2xl font-title font-semibold">
                Short Description
              </label>
              <textarea
                required
                name="short_description"
                className="py-2 resize-none overflow-hiddennode px-4 border-0 outline-none h-44 bg-transparent shadow-custom rounded-xl w-full"
                placeholder="Enter Short Description"
              ></textarea>
            </div>

            {/* add button */}

            <div className="mt-7 w-full">
              <input
                type="submit"
                value="Add Craft Item"
                className="shadow-custom w-full py-3 px-8 rounded-full text-2xl font-medium text-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
