import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen flex justify-center items-center px-5"
        style={{ backgroundImage: "url(/Moon.svg)" }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404</h1>
            <h3 className="mb-5 text-5xl text-primary font-title font-bold">
              Page Not Found.
            </h3>
            <p className="mb-5 text-gray-400 font-medium">
              Sorry, the page you are looking for doesn’t exist. Go out, take a
              run around the block, or tap the button below.
            </p>
            <Link to="/">
              <button className="py-3 px-8 text-3xl font-bold font-title text-primary shadow-custom rounded-full">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
