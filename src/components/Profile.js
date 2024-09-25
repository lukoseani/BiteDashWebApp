import {useState,useEffect} from 'react';


const Profile = (props)=>{
    const [count,setCount] = useState(0);
    const [count2,setcount2] = useState(0);

    useEffect(()=>{
    const timer  = setInterval(()=>{
        console.log("Function Timer")
    },1000);
    return ()=>{
    clearInterval(timer)
    }
    },[])
    return (
        <div>
            <h2>This is profile component</h2>
            <p>Name:{props.name}</p>
            <p>Count: {count}</p>
            <p>Count2:{count2}</p>
            <button onClick={()=>{
                setCount(1)
                setcount2(2)
            }}>count</button>
        </div>
    )
}

export default Profile;