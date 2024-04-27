import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import CraftCard from "../components/CraftCard";
import { Typewriter } from "react-simple-typewriter";


const Home = () => {
  const craftItems = useLoaderData();
  
  return (
    <div className="artsContainer mt-10">
      <div>
        <Banner />

        <div>
          <h2 className="text-center font-title text-4xl md:text-6xl text-black font-bold my-16">
            Latest{" "}
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
      </div>
    </div>
  );
}

export default Home