import BG from "../assets/Moon.svg";

const AddCraftItem = () => {
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
          <form className="px-5 w-full md:py-10 mb-10 text-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {/* group 1 */}
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

              {/* group 2 */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Sub Category
                </label>
                <select
                  name="sub_category"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-300"
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

              {/* group 3 */}
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

              {/* group 4 */}
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

              {/* group 5 */}
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

              {/* group 6 */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Customization
                </label>
                <select
                  name="customization"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-300"
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* group 7 */}
              <div className="flex flex-col gap-2">
                <label>Proccessing Time</label>
                <input
                  type="text"
                  name="processing_time"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                  placeholder="Enter Proccessing Time"
                  required
                />
              </div>

              {/* group 8 */}
              <div className="flex flex-col gap-2">
                <label className="text-2xl font-title font-semibold">
                  Stock Status
                </label>
                <select
                  name="stock_status"
                  className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl text-gray-300"
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
                name="description"
                className="py-2 px-4 border-0 outline-none h-44 bg-transparent shadow-custom rounded-xl w-full"
                placeholder="Enter Short Description"
              ></textarea>
            </div>


            {/* add button */}

            <div className="mt-7 w-full">
                <input type="submit" value="Add Craft Item" className="shadow-custom w-full py-3 px-8 rounded-full text-2xl font-medium text-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraftItem;
