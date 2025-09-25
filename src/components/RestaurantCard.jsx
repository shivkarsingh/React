import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;

    const { 
        id,
        name,
        cloudinaryImageId,
        avgRating,
        cuisines,
        areaName,
        sla
    } = resData?.info;

    return(

        <div className="res-card">
         <p>{props.l8im}</p>
            <img 
            className="res-logo"
            alt="res-logo" src={CDN_URL + cloudinaryImageId } />

            <div className="rest-info">
               <div className="rest-name">{name}</div>

                <div className="sub-info">
                    <div className="type"> 
                        {cuisines.slice(0,3).join(", ")}
                    </div>

                    <div className="rating-time">
                        <div>⭐️ {avgRating}</div>
                        <div>{sla.deliveryTime} mins</div>
                    </div>

                    <div className="location">{areaName}</div>

                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;