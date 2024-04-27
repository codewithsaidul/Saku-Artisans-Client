import { Typewriter } from "react-simple-typewriter";
import CraftCard from "../components/CraftCard";
import { useLoaderData } from "react-router-dom";


const AllCraftItems = () => {

  const craftItems = useLoaderData();

  return (
    <div className="artsContainer">
      <h2 className="text-center font-title text-4xl md:text-6xl text-black font-bold my-16">
        All {" "}
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 md:px-0">
        {craftItems.map((craftItem) => (
          <CraftCard key={craftItem.id} craftItem={craftItem}></CraftCard>
        ))}
      </div>
    </div>
  );
}

export default AllCraftItems