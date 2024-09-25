import {useState,useEffect} from 'react';
const useOnline = () => {
    const [isOnline,setIsOnline] = useState(true);
    
    useEffect(()=>{

        const handleIsOnline = ()=>{
            setIsOnline(true);
        }
        const handleIsOffline = ()=>{
            setIsOnline(false);
        }
        
        window.addEventListener("online",handleIsOnline)
        window.addEventListener("offline",handleIsOffline)

        return ()=>{
            window.removeEventListener("online",handleIsOnline);
            window.removeEventListener("offline",handleIsOffline);
        }
    },[])
   
    return isOnline;
}

export default useOnline;