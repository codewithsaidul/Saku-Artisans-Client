import { Typewriter } from "react-simple-typewriter";
import { useLoaderData } from "react-router-dom";
import MyCraftList from "../components/MyCraftList";



const MyCraftLists = () => {
    const craftItems = useLoaderData();

    
    

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

     
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
          {craftItems.map((craftItem) => (
            <MyCraftList key={craftItem.id} craftItem={craftItem} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCraftLists