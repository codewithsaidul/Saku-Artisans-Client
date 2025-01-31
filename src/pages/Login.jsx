import { CiMail } from "react-icons/ci";
import { FaGithub, FaGoogle, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const naviGate = useNavigate();

  const { register, handleSubmit, resetField } = useForm();

  const { loginUser, githubSignIn, googleSignIn, setUser } = useAuth();

  // Sign In Existing User With Email & Password
  const onSubmit = (data) => {
    const { Email, Password } = data;
    // console.log(Email, Password)
    resetField("Email");
    resetField("Password");

    loginUser(Email, Password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          title: "Success!",
          text: "Successfully LoggedIn!",
          icon: "success",
          confirmButtonText: "Ok",
        });
        naviGate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Wrong!",
          text: "Your Email or Password Are Wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // Sign In Existing User With Github
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        setUser(result.user);
        naviGate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Wrong!",
          text: "Your Email or Password Are Wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // Sign In Existing User With Google
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        
        naviGate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Wrong!",
          text: "Your Email or Password Are Wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };




  return (
    <div>
      <div>
        <div
          className="w-full min-h-screen flex justify-center items-center px-5"
          style={{ backgroundImage: "url(/Moon.svg)" }}
        >
          <div className="shadow-custom my-10 px-5 rounded-xl w-full md:w-[50%]">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="py-10 px-5 md:p-20"
            >
              <h2 className="text-3xl font-title font-bold text-center text-white mb-7">
                Login In Your Account
              </h2>

              <div className="border-b pb-10 w-full border-gray-400">
                <div className="flex flex-col gap-2 mt-5 mb-3">
                  <label
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="text-xl font-semibold text-gray-300"
                  >
                    E-Mail
                  </label>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="w-full shadow-custom rounded-full flex items-center py-2 px-3"
                  >
                    <CiMail size={24} className="text-white" />
                    <input
                      type="email"
                      {...register("Email")}
                      placeholder="Type Your Email"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="text-xl font-semibold text-gray-300"
                  >
                    Password
                  </label>
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="w-full shadow-custom rounded-full flex items-center py-2 px-3"
                  >
                    <FaLock size={20} className="text-white" />
                    <input
                      type="password"
                      {...register("Password")}
                      placeholder="Type Your Password"
                      className="w-full outline-none border-0 bg-transparent  pl-4 text-gray-200 "
                      required
                    />
                  </div>
                </div>

                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  className="p-5 shadow-custom mt-7 w-full text-white text-xl font-bold rounded-full"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="text-center pb-10">
              <h2
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                className="text-2xl font-bold text-white mb-7"
              >
                Or Sign In Using
              </h2>

              <div className="flex gap-x-5 justify-center">
                <button
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  onClick={handleGoogleLogin}
                  className="p-3 bg-red-500 text-white rounded-full"
                >
                  <FaGoogle size={24} />
                </button>
                <button
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  onClick={handleGithubLogin}
                  className="p-3 bg-black text-white rounded-full"
                >
                  <FaGithub size={24} />
                </button>
              </div>

              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h2 className="text-xl font-normal text-gray-300 mt-7">
                  Don&apos;t Have An Account?{" "}
                  <Link
                    to="/register"
                    className="text-primary font-title ml-2 font-extrabold"
                  >
                    Register
                  </Link>{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
