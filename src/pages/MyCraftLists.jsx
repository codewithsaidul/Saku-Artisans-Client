import { Typewriter } from "react-simple-typewriter";
import { useLoaderData } from "react-router-dom";
import MyCraftList from "../components/MyCraftList";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";

const MyCraftLists = () => {
  const craftItems = useLoaderData();

  const [crafts, setCraft] = useState([]);
  const [displayCraft, setDisplayCraft] = useState()

  useEffect(() => {
    setCraft(craftItems);
    setDisplayCraft(craftItems)
  }, [craftItems]);

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
            <MyCraftList key={craft.id} craft={craft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCraftLists;
