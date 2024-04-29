import { Typewriter } from "react-simple-typewriter";

import MyCraftList from "../components/MyCraftList";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState,  } from "react";
import BGImg from "../assets/slide1.jpg";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftLists = () => {


  const {user} = useAuth()


  const [crafts, setCraft] = useState([]);
  const [displayCraft, setDisplayCraft] = useState();

  useEffect(() => {
    fetch(`https://assignment-server-flame.vercel.app/myCraft/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCraft(data);
        setDisplayCraft(data);
      });
  }, [user]);


   const handleDelete = (id) => {
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(
           `https://assignment-server-flame.vercel.app/allCraftItems/${id}`,
           {
             method: "DELETE",
           }
         )
           .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount > 0) {
               Swal.fire({
                 title: "Deleted!",
                 text: "Arts & Crafts Item has been deleted.",
                 icon: "success",
               });
               const remaning = crafts.filter((coffee) => coffee._id !== id);
               setCraft(remaning);
               setDisplayCraft(remaning);
             }
           });
       }
     });
   };

  // filter method using customization
  const handleFilter = (fillter) => {
    if (fillter === "yes") {
      const customization = displayCraft.filter(
        (craft) => craft.customization.toLowerCase() === "yes"
      );
      setCraft(customization);
    } else if (fillter === "no") {
      const customization = displayCraft.filter(
        (craft) => craft.customization.toLowerCase() === "no"
      );
      setCraft(customization);
    } else {
      setCraft(displayCraft);
    }
  };

  return (
    <div>
      <div className="relative w-full">
        <figure className="w-full hero ">
          <img className="w-full h-44" src={BGImg} alt="" />
          <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
        </figure>

        <div className="absolute top-16 md:top-10 left-0 right-0 text-center md:p-10">
          <h3 className="text-2xl sm:text-3xl font-medium text-white">
            <Link to="/" className="text-primary font-semibold">
              Home
            </Link>{" "}
            / My Arts & Craft List
          </h3>
        </div>
      </div>

      <div className="artsContainer">
        {/* Page Title */}
        <div>
          <h2 className="text-center font-title text-4xl md:text-6xl text-black font-bold my-16">
            My{" "}
            <span style={{ color: "#4ad66d", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Jute Craft Items", "Wooden Craft Items"]}
                loop={true}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </div>

        {/* fillter */}
        <div className="my-10">
          <details className="dropdown">
            <summary className="m-1 btn hover:bg-[#23BE0A] bg-[#23BE0A] text-white">
              Fillter <IoIosArrowDown size={24} />
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handleFilter()}>
                <a>All</a>
              </li>
              <li onClick={() => handleFilter("yes")}>
                <a>Yes</a>
              </li>
              <li onClick={() => handleFilter("no")}>
                <a>No</a>
              </li>
            </ul>
          </details>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
            {crafts.map((craft) => (
              <MyCraftList key={craft._id} handleDelete={handleDelete} craft={craft} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftLists;
