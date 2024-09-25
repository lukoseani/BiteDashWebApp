import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';
import {IMG_CDN_URL} from '../constants';
import {Shimmer} from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = ()=>{
    const {id} = useParams();

    

    //const [restaurant,setRestauarant] = useState(null);

    const restaurant = useRestaurant(id);

   
   
    return !restaurant ? <Shimmer/> : (
        <div>
            <h2>id : {id}</h2>
            <h2>Namaste</h2>
            <h3>{restaurant?.cards[2]?.card?.card?.info?.avgRating}</h3>
            <h3>{restaurant?.cards[2]?.card?.card?.info?.city}</h3>
            <img src={IMG_CDN_URL+restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
            <div>
                <ul>{restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(item=>(
                   <li key={item.card?.info?.id}>{item.card?.info?.name}</li> ))}
                    </ul>
            </div>
        </div>
        
    )
}

export default RestaurantMenu;