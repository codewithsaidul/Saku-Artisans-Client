
import { CiLock, CiMail, CiUnlock } from 'react-icons/ci';
import { FaEye, FaEyeSlash, FaImage, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";
import BG from '../assets/Moon.svg'
import useAuth from '../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Register = () => {


  const naviGate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

    const { user, createNewUser, loggedOutUser, setUser } = useAuth();
    

     const {
       register,
       handleSubmit,
       resetField,
       // watch,
       formState: { errors },
     } = useForm();

      const onSubmit = (data) => {
        const name = data.Name;
        const photo = data.Photo;
        const email = data.Email;
        const password = data.Password;

        // const { Name, Photo, Email, Password } = data;
        const userInfo = { name, photo, email, password };

        resetField("name");
        resetField("photo");
        resetField("email");
        resetField("password");


        // Create a New User
        createNewUser(email, password)
          .then((result) => {
            updateProfile(result.user, {
              displayName: name,
              photoURL: photo,
            });
            setUser({ ...user, displayName: name, photoURL: photo });

            fetch("http://localhost:5000/users", {
              method: "POST",
              header: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Success!",
                    text: "User Added Successfully!",
                    icon: "success",
                    confirmButtonText: "Ok",
                  });
                }
              });
            naviGate("/login");
            loggedOutUser();
          })
          .catch(() => {
            Swal.fire({
              title: "Error!",
              text: "E-Mail Already In Used!",
              icon: "error",
              confirmButtonText: "Ok",
            });
          });
      };

  return (
    <div>
      <div>
        <div>
          <div
            className="w-full mt-5 flex justify-center items-center px-5"
            style={{ backgroundImage: `url(${BG})` }}
          >
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="shadow-custom my-10 rounded-xl w-full md:w-[50%]"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-10 px-5 md:p-20 md:py-10 mb-10 "
              >
                <h2 className="text-3xl font-title font-bold text-center text-white mb-7">
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
                  {errors.Name && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Name.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-5 mb-3">
                  <label className="text-xl font-semibold text-gray-300">
                    Photo URL
                  </label>

                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    <FaImage size={24} className="text-white" />
                    <input
                      type="text"
                      {...register("Photo", {
                        required: {
                          value: true,
                          message: "Please Fill Up This ",
                        },
                      })}
                      placeholder="Type Your Photo URL"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />
                  </div>
                  {errors.Photo && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Photo.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 mt-5 mb-3">
                  <label className="text-xl font-semibold text-gray-300">
                    E-Mail
                  </label>

                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    <CiMail size={24} className="text-white" />
                    <input
                      type="email"
                      {...register("Email", {
                        required: {
                          value: true,
                          message: "Please Fill Up This",
                        },
                      })}
                      placeholder="Type Your Email"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />
                  </div>
                  {errors.Email && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xl font-semibold text-gray-300">
                    Password
                  </label>
                  <div className="w-full shadow-custom rounded-full flex items-center py-2 px-3">
                    {showPassword ? (
                      <CiUnlock size={24} className="text-white" />
                    ) : (
                      <CiLock size={24} className="text-white" />
                    )}
                    <input
                      type={"password"}
                      {...register("Password", {
                        validate: {
                          validatedPassword: (value) => {
                            if (value.length < 6) {
                              return "Password Should Be At Least 6 Character or Above";
                            } else if (!/[A-Z]/.test(value)) {
                              return "Password should contain at least one uppercase letter";
                            } else if (!/([a-z])/.test(value)) {
                              return "Your password should have at least one lowercase character";
                            }
                          },
                        },
                      })}
                      placeholder="Type Your Password"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                    />

                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash size={24} className="text-white" />
                      ) : (
                        <FaEye size={24} className="text-white" />
                      )}
                    </span>
                  </div>

                  {errors.Password && (
                    <p className="text-base text-red-600 font-semibold">
                      {errors.Password.message}
                    </p>
                  )}
                </div>

                <button className="p-5 shadow-custom mt-7 w-full text-white text-xl font-bold rounded-full">
                  Register
                </button>
              </form>

              <div className="text-center pb-10">
                <div>
                  <h2 className="text-xl font-normal text-gray-300 mt-7">
                    Already Have An Account?
                    <Link
                      to="/login"
                      className="text-primary font-title
                     ml-2 font-extrabold"
                    >
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