import {useState} from 'react';
import {Link} from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Title = () =>{
    return(
        <a href="/">
        <img 
        className="logo"
        alt="logo"
        src="https://img.atom.com/story_images/visual_images/1627212809-1.png"/>
        </a>
    )
}



const Header = ()=>{
    const isOnline = useOnline();
    [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
     <div className="header">
     <Title/>
     <div className="nav-items">
     <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact Us</Link></li>
         <li><Link to="/cart">Cart</Link></li>
         <li><Link to="/instamart">Instamart</Link></li>
         <li>{isOnline? "✅ Online" : "🛑Offline"}</li>
     </ul>
     </div>
     {isLoggedIn ? 
     <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : 
     <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
     </div>
    );
 };

 export default Header;