import { useLoaderData } from "react-router-dom"


const UpdateCraftData = () => {

    const craft = useLoaderData();
    console.log(craft)

  return (
    <div>UpdateCraftData</div>
  )
}

export default UpdateCraftData