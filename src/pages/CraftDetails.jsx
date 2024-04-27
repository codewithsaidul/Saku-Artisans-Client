import { useLoaderData } from "react-router-dom"

const CraftDetails = () => {
  const craftItem = useLoaderData();
  console.log(craftItem)
  return (
    <div>CraftDetails</div>
  )
}

export default CraftDetails