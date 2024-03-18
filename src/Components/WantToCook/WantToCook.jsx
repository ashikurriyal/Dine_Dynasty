
const WantToCook = ({ recipe, idx }) => {

    const { recipe_name, preparing_time, calories } = recipe;
    return (
        <div className="flex p-4">
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{idx+1}</th>
                            <td className="font-fira-sans font-semibold">{recipe_name}</td>
                            <td className="font-fira-sans font-semibold">{preparing_time}</td>
                            <td className="font-fira-sans font-semibold">{calories}</td>
                            <td><button className="btn rounded-full bg-green-400">Preapearing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WantToCook;