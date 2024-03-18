import { useEffect } from "react";
import { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import WantToCook from "../WantToCook/WantToCook";

const RecipeCards = () => {

    const [foods, setFoods] = useState([])

    const handleWanttoCook = (items) => {
        const newItems = [...foods, items]
        setFoods(newItems)
    }

    const [recipes, setRecipes] = useState([])

    console.log(recipes)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="container mx-auto flex lg:mb-10 justify-between gap-5">

            {/* left cards */}
            <div className="w-2/3 grid grid-cols-2 gap-4 ">
                {
                    recipes.map(recipe => <RecipeCard
                        recipe={recipe}
                        key={recipe.recipe_id}
                        handleWanttoCook = {handleWanttoCook}
                    ></RecipeCard>)
                }
            </div>
            {/* left cards end*/}



            {/* right cards */}
            <div className="flex flex-col   w-1/3 items-center border-2 rounded-2xl">
                <h1 className="font-lexend font-semibold text-2xl">Want to Cook: {recipes.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th  className="font-fira-sans text-[#878787] ">Name</th>
                                <th  className="font-fira-sans text-[#878787] ">Time</th>
                                <th  className="font-fira-sans text-[#878787] ">Calories</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                {
                    // recipes.map((recipe, idx) => <WantToCook
                    //     recipe={recipe}
                    //     key={recipe.recipe_id}
                    //     idx={idx}
                    // ></WantToCook>)
                }

            </div>
        </div>
    );
};

export default RecipeCards;