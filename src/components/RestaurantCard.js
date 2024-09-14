import {IMG_CDN_URL} from '../constants';

const RestaurantCard = ({name, cuisines, cloudinaryImageId,avgRating})=>{
    
    
    return (  
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h3>{cuisines?.join(', ')}</h3>
            <h2>{avgRating}</h2>
            
        </div>
    );
}

export default RestaurantCard;