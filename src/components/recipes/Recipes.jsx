import ReceipeCard from "./ReceipeCard";
import PropTypes from 'prop-types';


var recipes = [{
    source: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8756.jpg",
    title: "Sashimi",
    author: "Mochizuki",
    time: 25
},
{
    source: "https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg",
    title: "Alfredo Pasta",
    author: "Mario",
    time: 50
},
{
    source: "https://static01.nyt.com/images/2021/09/22/dining/17chickenrex/merlin_194652171_2bbe3336-29a8-4ba2-81ba-449ce2f1904c-articleLarge.jpg",
    title: "Steam Chicken Roast",
    author: "Linda",
    time: 90
},
{
    source: "https://i0.wp.com/plumstreetcollective.com/wp-content/uploads/2020/05/Italian-Margherita-Pizza-scaled.jpg",
    title: "Italian margherita pizza",
    author: "Mario",
    time: 170
},
{
    source: "https://www.cookingclassy.com/wp-content/uploads/2022/07/grilled-steak-15.jpg",
    title: "grilled steak",
    author: "Arthur",
    time: 480
},
{
    source: "https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-1200.jpg",
    title: "Hawaiian pizza",
    author: "Jessica",
    time: 50
},
{
    source: "https://kfoods.com/images1/newrecipeicon/murgh-biryani_1014.jpg",
    title: "biryani",
    author: "Dilawar",
    time: 50
}

    , {
    source: "https://i.redd.it/3qo44g9x62551.png",
    title: "Delete this",
    author: "Mario",
    time: 1
}

]

export default function Recipes({ title }) {
    return (
        <div>
            <h4 className="font-bold mt-8 pb-6 border-b border-gray-200 font-jersey">{title}</h4>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {/*recipe cards*/}
                {recipes.map(item => {
                    return <ReceipeCard item={item} key={item.title + item.source} />
                })}
            </div>
        </div>
    )
}

Recipes.propTypes = {
    title: PropTypes.string.isRequired
}