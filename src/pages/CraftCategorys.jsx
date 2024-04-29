import { useEffect, useState } from "react"
import CraftCategoryNameCard from "../components/CraftCategoryNameCard";


const CraftCategorys = () => {


    const [craftCategory, setCraftCategory] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/craftCategory")
        .then(res => res.json())
        .then(data => setCraftCategory(data))
    }, [])



    // console.log(craftCategory)

  return (
    <div>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    craftCategory.map(craftCat => <CraftCategoryNameCard key={craftCat._id} craftCat={craftCat}></CraftCategoryNameCard>)
                }
            </div>
        </div>
    </div>
  )
}

export default CraftCategorys