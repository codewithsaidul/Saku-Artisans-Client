// import { DNA } from "react-loader-spinner";
import useAuth from "../hooks/useAuth"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { DNA } from "react-loader-spinner";

const PrivateRoute = ({children}) => {

    const { user, loading } = useAuth();

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      );
    }

    if (user) {
        return children
    }

  return (
    <div>
      <div
        className="w-full mt-5 min-h-screen flex justify-center items-center"
        style={{ backgroundImage: "url(/Moon.svg)" }}
      >
        <div className="text-center">
          <h2 className="text-center text-5xl md:text-9xl text-primary font-title font-normal mb-10">
            Please Login First
          </h2>

          <Link
            to="/login"
            className="px-5 py-3 shadow-custom text-xl text-white font-semibold rounded-full"
          >
            Login In Here
          </Link>
        </div>
      </div>
    </div>
  );
}

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute