import {PROXY_URL,API_URL_PART1,API_URL_PART2} from '../constants';
import {useState,useEffect} from 'react';
const restaurant = (id) => {
    
    const [restaurant,setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        
        const apiUrl = API_URL_PART1+id+API_URL_PART2;
        const ecodedUrl = encodeURIComponent(apiUrl);
        const response = await fetch(PROXY_URL+ecodedUrl);

        if(!response){
         throw new Error('Http Error:'+response.status);
        }
        const result = await response.json();
        const json = JSON.parse(result.contents);
        console.log(json?.data);
        setRestaurant(json?.data);
        //{restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards[0].card,info}
        
    }

    return restaurant;
}

export default restaurant;