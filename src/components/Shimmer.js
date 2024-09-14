
export const Shimmer = ()=>{
    const size = 24;
    const initialValue = null;
    const shimmerElements = new Array(size).fill(initialValue);
    return (
        
        <div className="restaurant-list">

        {shimmerElements.map((element,index) => {
            return <div className="card" key={"c"+index}>
            <div className="shimmerImageBox" key={"si"+index}></div>
            <div className="contentBox" key={"sc"+index}></div>
            
        </div>
        })}
            
            
            
    </div>
    );
}

