import { useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
  const craftItems = useLoaderData();
  const { id } = useParams();

  const craftId = parseInt(id);

  const craft = craftItems.find((craftItem) => craftItem.id === craftId);

  return (
    <div className="artsContainer px-5 mt-16">
      {" "}
      <div className="flex flex-col md:flex-row gap-5 h-auto bg-base-100 shadow-xl border-2 rounded-3xl border-transparent hover:border-primary duration-1000 hover:scale-95">
        <figure>
          <img
            className="w-full h-[350px] rounded-t-3xl md:rounded-l-3xl"
            src={craft.image}
            alt="craft"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-semibold text-primary font-title">
            {craft.item_name}
          </h2>

          <p className="text-2xl font-normal text-gray-500 font-title">
            Category :
            <span className="font-title font-semibold text-primary ml-3">
              {craft.item_name}
            </span>
          </p>

          <p className="text-base font-normal text-gray-400">
            {craft.short_description}
          </p>

          <div className="flex">
            <p className="text-lg text-gray-500 font-normal">
              Price :{" "}
              <span className="text-primary font-title font-semibold">
                {craft.price}
              </span>
            </p>
            <p className="text-lg text-gray-500 font-normal">
              Rating :{" "}
              <span className="text-primary font-title font-semibold">
                {craft.rating}
              </span>
            </p>
          </div>

          <div className="flex gap-5">
            <h4 className="text-lg text-gray-500 font-normal">
              Customization :{" "}
              <span className="text-primary font-title font-semibold">
                {craft.customization}
              </span>
            </h4>

            <h4 className="text-lg text-gray-500 font-normal">
              Stock Status :{" "}
              <span className="text-primary font-title font-semibold">
                {craft.stockStatus}
              </span>
            </h4>
          </div>
          <h4 className="text-lg text-gray-500 font-normal">
            Processing Time:{" "}
            <span className="text-primary font-title font-semibold">
              {craft.processing_time}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
