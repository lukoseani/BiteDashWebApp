import {restaurantList} from '../constants';
import RestaurantCard from './RestaurantCard';
import {useState,useEffect} from 'react';
import {Shimmer} from './Shimmer'



const Body = ()=>{
    
    const [searchInput,setSearchInput] = useState("Burger");
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    
    
    useEffect(()=>{
     getRestaurants();
    },[]);

    function filterData(searchInput,restaurants){
        return restaurants.filter(restaurant => restaurant?.info?.name?.toUpperCase().includes(searchInput?.toUpperCase()))
        }
    
        
     async function getRestaurants(){

        try{
        const proxyUrl = 'https://api.allorigins.win/get?url=';
        const apiUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.7059523&lng=76.5114042&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const encodedUrl = encodeURIComponent(apiUrl);
        const response = await fetch(proxyUrl + encodedUrl);

        if(!response.ok){
            throw new Error(`Http error! ${response.status}`);
        }
        const result = await response.json();
        const json = JSON.parse(result.contents);
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
        catch(error){
            console.error(`error fetching data ${error}`);
        }
     }
     
     if(allRestaurants?.length === 0) return (<Shimmer/>)

     
     
    return (
    
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
        
        const data = filterData(searchInput,allRestaurants);
        setFilteredRestaurants(data)
       
        
    }}
    >Search</button>
    
    </div>
    <div className="restaurant-list">

        {filteredRestaurants.length === 0 ? <h1>No Restaurants Match Your Search</h1> :
        filteredRestaurants?.map(restaurant => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
            
            
            
    </div>
    </>
    );
};

export default Body;