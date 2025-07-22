import RestaurantCard from "./RestaurantCard";
import { restaurants, restaurants } from "../mockdata/data";
import Search from "./Search";
const Body = () => {
    const restaurantList = restaurants;
    return (
        <div className="flex flex-col items-center m-4">
            <Search/>
            <div className="flex flex-wrap justify-center m-4">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;