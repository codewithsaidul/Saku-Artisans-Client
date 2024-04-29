
import BG from "../assets/Moon.svg";


const Contact = () => {



  return (
    <div>
      {" "}
      <div
        className="w-full min-h-screen flex justify-center items-center px-5"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="shadow-custom my-10 rounded-xl w-full md:w-[70%]">
          <h2 className="text-4xl text-center mt-7 font-bold text-primary font-title mb-16">
            Contact Us
          </h2>

          <div>
            <form className="px-5 w-full md:py-10 mb-10 text-gray-400">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* group 1 item nae */}
                <div className="flex flex-col gap-2">
                  <label className="text-2xl font-title font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                    placeholder="Enter  Name"
                    required
                  />
                </div>

                {/* group 3 price */}
                <div className="flex flex-col gap-2">
                  <label className="text-2xl font-title font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="price"
                    className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                    placeholder="Enter  Email"
                    required
                  />
                </div>

                {/* group 4  rating */}
                <div className="flex flex-col gap-2">
                  <label className="text-2xl font-title font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="rating"
                    className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                    placeholder="Enter Subject"
                    required
                  />
                </div>

                {/* group 5 photo url */}
                <div className="flex flex-col gap-2">
                  <label className="text-2xl font-title font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="img_url"
                    className="py-2 px-4 border-0 outline-none bg-transparent shadow-custom rounded-xl"
                    placeholder="Enter IPhone Number"
                    required
                  />
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
                  placeholder="Enter Message"
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
    </div>
  );
};

export default Contact;
