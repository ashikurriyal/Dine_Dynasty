const RecipeCard = ({ recipe, handleWanttoCook }) => {
    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = recipe;
    return (
        <div className="">
            <div className=" bg-base-100 shadow-xl border-2 rounded-2xl justify-center">
                <div className="px-6 pt-6 ">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl w-[460px] h-[260px]" />
                </div>
                <div className="card-body space-y-3">
                    <h2 className="card-title font-lexend font-semibold text-xl">{recipe_name}</h2>
                    <p className="font-firaSans font-normal text-base text-[#878787]">{short_description}</p>
                    <hr />
                    <h2 className="font-lexend font-medium text-lg ">Ingridients: {ingredients.length}</h2>
                    <div>
                        {
                            <ul className="font-firaSans font-normal text-lg text-[#878787] list-disc ml-5">
                                {
                                    ingredients.map(i => <li>{i}</li>)
                                }
                                
                            </ul>
                        }
                    </div>
                    <hr />
                    <div className="flex gap-6">
                        <div className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p>
                                {preparing_time}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                            </svg>

                            <p>
                                {calories}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleWanttoCook(recipe)} className="btn rounded-full bg-green-400 font-lexend font-semibold text-xl">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;