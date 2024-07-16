
import ResCard from "./Restaurants";
import { resList } from "../utils/config";

const BodyComponent = ()=>{
    return(
    <div className="body-component">
        <div className="search-container"> 
            <button className="filter-btn" onClick={()=>{
                resList = resList.filter((res)=>{
                    return res.info.avgRating > 4;
                    
                });console.log(resList)
             } }>Top Rated Restaurants</button>
        </div>

        <div className="restaurant-container">

        {
            resList.map((restaurant) => (<ResCard key={restaurant.info.id} resData={restaurant} /> ))
        }
        </div>
    </div>)
    
}

export default BodyComponent;