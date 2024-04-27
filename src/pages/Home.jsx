import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import CraftCard from "../components/CraftCard";


const Home = () => {
  const craftItems = useLoaderData();
  return (
    <div className="artsContainer mt-10">
      <div>
        <Banner />

        <div>
          <h2 className="text-center font-title text-6xl text-primary font-bold my-16">Latest Jute Craft Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {craftItems.slice(0, 6
            ).map((craftItem) => (
              <CraftCard key={craftItem.id} craftItem={craftItem}></CraftCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home