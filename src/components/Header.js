

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
     </div>
    );
 };

 export default Header;