
import { CiMail } from 'react-icons/ci';
import { FaImage, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { register } from 'swiper/element';
import BG from '../assets/Moon.svg'

const Register = () => {
  return (
    <div>
      <div>
        <div>

          <div
            className="w-full mt-5 flex justify-center items-center"
            style={{ backgroundImage: `url(${BG})` }}
          >
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="shadow-custom my-10 rounded-xl w-full md:w-[50%]"
            >
              <form
                // onSubmit={handleSubmit(onSubmit)}
                className="py-10 px-16 md:p-20 md:py-10 mb-10 "
              >
                <h2 className="text-3xl font-bold text-center text-white mb-7">
                  Register
                </h2>

                <div className="flex flex-col gap-2 mt-5 mb-3">
                  <label className="text-xl font-semibold text-gray-300">
                    Name
                  </label>

                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    <FaUser size={24} className="text-white" />
                    <input
                      type="text"
                      placeholder="Type Your Name"
                      {...register("Name", {
                        required: {
                          value: true,
                          message: "Please Fill Up This First",
                        },
                      })}
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />
                  </div>
                  {/* {errors.Name && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Name.message}
                    </p>
                  )} */}
                </div>

                <div className="flex flex-col gap-2 mt-5 mb-3">
                  <label className="text-xl font-semibold text-gray-300">
                    Photo URL
                  </label>

                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    <FaImage size={24} className="text-white" />
                    <input
                      type="text"
                    //   {...register("Photo", {
                    //     required: {
                    //       value: true,
                    //       message: "Please Fill Up This ",
                    //     },
                    //   })}
                      placeholder="Type Your Photo URL"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />
                  </div>
                  {/* {errors.Photo && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Photo.message}
                    </p>
                  )} */}
                </div>

                <div className="flex flex-col gap-2 mt-5 mb-3">
                  <label className="text-xl font-semibold text-gray-300">
                    E-Mail
                  </label>

                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    <CiMail size={24} className="text-white" />
                    <input
                      type="email"
                    //   {...register("Email", {
                    //     required: {
                    //       value: true,
                    //       message: "Please Fill Up This",
                    //     },
                    //   })}
                      placeholder="Type Your Email"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />
                  </div>
                  {/* {errors.Email && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Email.message}
                    </p>
                  )} */}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xl font-semibold text-gray-300">
                    Password
                  </label>
                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    {/* {showPassword ? (
                      <CiUnlock size={24} className="text-white" />
                    ) : (
                      <CiLock size={24} className="text-white" />
                    )} */}
                    <input
                      type={"password"}
                      //   {...register("Password", { showPassword ? "text" :
                      //     validate: {
                      //       validatedPassword: (value) => {
                      //         if (value.length < 6) {
                      //           return "Password Should Be At Least 6 Character or Above";
                      //         } else if (!/[A-Z]/.test(value)) {
                      //           return "Password should contain at least one uppercase letter";
                      //         } else if (!/([a-z])/.test(value)) {
                      //           return "Your password should have at least one lowercase character";
                      //         }
                      //       },
                      //     },
                      //   })}
                      placeholder="Type Your Password"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />

                    {/* <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash size={24} className="text-white" />
                      ) : (
                        <FaEye size={24} className="text-white" />
                      )}
                    </span> */}
                  </div>

                  {/* {errors.Password && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Password.message}
                    </p>
                  )} */}
                </div>

                <button className="p-5 shadow-custom mt-7 w-full text-white text-xl font-bold rounded-full">
                  Register
                </button>
              </form>

              <div className="text-center pb-10">
                <div>
                  <h2 className="text-xl font-normal text-gray-300 mt-7">
                    Already Have An Account?
                    <Link to="/login" className="text-primary ml-2 font-extrabold">
                      Login
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register