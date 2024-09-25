import React from 'react';

class ProfileClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo :{
                name : "Dummy Name",
                location : "Dummy Location"

            }
        }
        console.log(`${this.props.name}- constructor is called`);
    }

    async componentDidMount(){
     
     //This is the best place for API calls.
     const proxyUrl = 'https://api.allorigins.win/get?url=';
        const apiUrl = 'https://api.github.com/users/akshaymarch7';
        const encodedUrl = encodeURIComponent(apiUrl);
     
     const response = await fetch(proxyUrl + encodedUrl);
     const result = await response.json();
     const json = JSON.parse(result.contents);
     console.log(json);
     
     this.setState({
        userInfo : json
     })
    
     console.log(`${this.props.name} - component did mount is called`);
     this.timer = setInterval(()=>{
        console.log("Timer")
     },1000);
    }

    componentDidUpdate(){
        console.log('component Did Update');
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    
    render(){
        console.log(`${this.props.name} - render`);
        return(
            <div>
                <h1>This is profile class component</h1>
                <h3>Name : {this.state?.userInfo?.name}</h3>
                <h3>Location : {this.state?.userInfo?.location}</h3>
                
            </div>
        )
    }
}

export default ProfileClass;