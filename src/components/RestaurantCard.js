import {CON_URL} from "../utils/constants"

const RestaurantCard = ({resData}) => {
    const {
        cloudinaryImageId, 
        name, 
        cuisines, 
        avgRating, 
        costForTwo
     } = resData?.info
    return(
        <div className='res-card'>
            <img 
               className='res-logo'
               alt="res-logo" 
               src={`${CON_URL}${cloudinaryImageId}`}
            />
            <h4>{name}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard