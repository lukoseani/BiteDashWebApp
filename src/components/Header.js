import {useState} from 'react';

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

    [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
     <div className="header">
     <Title/>
     <div className="nav-items">
     <ul>
         <li>Home</li>
         <li>About</li>
         <li>Contact Us</li>
         <li>Cart</li>
     </ul>
     </div>
     {isLoggedIn ? 
     <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : 
     <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
     </div>
    );
 };

 export default Header;