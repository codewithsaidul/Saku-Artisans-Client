// import { DNA } from "react-loader-spinner";
import useAuth from "../hooks/useAuth"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import BG from '../assets/Moon.svg'

const PrivateRoute = ({children}) => {

    const { user, loader } = useAuth();

    if (loader) {
        
    console.log("loader is running")
            
    }

    if (user) {
        return children
    }

  return (
    <div>
      <div
        className="w-full mt-5 min-h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})` }}
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