import { LINK } from "../utils/config";


const ResCard = (props) =>{
    const {resData} = props;
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;
   return(
       <div className="res-card">
           <img src={LINK+cloudinaryImageId}></img>
            <h2 id="name">{name}</h2>
            <h2 id="Star-rating">{avgRating}</h2>
            <h2 id="cuisine">{cuisines.join(",")}</h2>
            <h2 id="delivery-time">{costForTwo}</h2>
       </div>
   );
}

export default ResCard;