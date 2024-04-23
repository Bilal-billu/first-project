import { Link } from "react-router-dom";
import Recipes from "../recipes/Recipes";

export default function Main() {
    //use context to extract recipes and do prop drilling 
    //OR
    //use additional flag inside recipes to indicate the recipe is popular
    return (
        <div className='h-screen overflow-scroll px-10'>
            <div className="flex justify-center align-middle items-center md:justify-end font-extrabold">

                <Link className="btnLogSign btnGeneral" to="">Log in</Link>
                <Link className="btnLogSign btnGeneral" to="">Sign up</Link>
            </div>
            <header>
                <h2 className="text-gray-700 text-7xl font-semibold font-sedan">Recipes</h2>
                <h3 className="text-2xl font-semibold font-sedan">For us</h3>
            </header>
            <div>
                <Recipes title='Latest Recipes' />
                <Recipes title='Most Popular' />
                

                <div className="flex justify-center mt-5">
                    <div className="btnGeneral btnLoad">
                        Load More
                    </div>
                </div>
            </div>
        </div>
    )
}
