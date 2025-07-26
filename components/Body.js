import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../mockdata/data";
import Search from "./Search";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        if(searchText){
            const filteredRestaurants = restaurants.filter(restaurant =>
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestaurantList(filteredRestaurants);
        }
    }, [searchText])

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    return restaurantList.length === 0 ? <Shimmer /> : (
        <div className="flex flex-col items-center m-4">
            <Search setSearchText={setSearchText}/>
            <div className="flex flex-wrap justify-center m-4">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;