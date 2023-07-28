import Data from "./Data";
const PodcastCard = (dataObj) => {

    return (

        console.log(dataObj.image),

        <div>
            <img>{dataObj.image}</img> /** podcast image */
            <h1>Podcast Card</h1> /** podcast title */
            <h2> Number of Seasons </h2>  /** for show */
            <h2> Number of Episodes </h2> /** for show  */
            <h2> Date </h2>  /** Date the show was last updated */
            <h2> Genre </h2> /** Genre of show  */
            <h2> Audio Player </h2>
        </div>
    )
}

export default PodcastCard;