import ProfileClass from './ProfileClass';
import Profile from './Profile';
import React from 'react';



class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent - Constructor")

    }
    componentDidMount(){
        console.log('Parent - component Did Mount')
    }

   
    render(){
        console.log("Parent - render");
        return(
            <div>
        <h1>This Bite Dash About Page - finding paths</h1>
        {/* <ProfileClass name={"Child"}/> */}
        <Profile />
        
        </div>

        )
    }

}

export default About;