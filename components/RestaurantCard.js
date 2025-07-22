const RestaurantCard = (props) => {
    const { name, cuisines, avgRating } = props.restaurant.info;
    return (
        <div className="card border border-gray-300 m-2 p-4 w-64 h- hover:shadow-lime-200 hover:shadow-lg">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/8/08074137-266d-46b8-bf6e-ffeae86fa003_96944.JPG" alt={name} className="w-full h-40 object-cover" />
            <h3 className="m-2 text-sm font-bold">{name}</h3>
            <p className="m-2">Cuisine: {cuisines.join(", ")}</p>
            <p className="m-2">Rating: {avgRating}</p>
        </div>
    );
}

export default RestaurantCard;
