import {restaurantList} from '../constants';
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';



const Body = ()=>{

    const [searchInput,setSearchInput] = useState("Burger");
    const [restaurants,setRestaurants] = useState(restaurantList);

    function filterData(searchInput,restaurants){
        return restaurants.filter(restaurant => restaurant.info.name.includes(searchInput))
        }

    return(
    <>
    <div className="search-container">
    <input type="text" 
        className="search-input" 
        value={searchInput} 
        onChange={(e)=>{
            
            setSearchInput(e.target.value);
    }}/>
    <button className="search-button" 
    onClick={(e)=>{
        if(searchInput !== " "){
        const data = filterData(searchInput,restaurants);
        setRestaurants(data)
        }
        else{
            const data = filterData(" ",restaurants);
            setRestaurants(data);
        }
        
    }}
    >Search</button>

    </div>
    <div className="restaurant-list">

        {restaurants.map(restaurant => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
            
            
            
    </div>
    </>
    );
};

export default Body;