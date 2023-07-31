import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import leftArrowImage from "../img/left-arrow.png"
// import rightArrowImage from "../img/right-arrow.png"

export default function Carousel ({ podcast }){       
        console.log(podcast)
        const [randomPodcast, setRandomPodcast] = useState([]);

        /* function that gets random podcasts to pass into the child component of
        *podcastCarousel which is displayed on the header/home page
        *
        */
        const getRandomPodcast = (podcast) => {
            const randomPodcast = [];
            while (randomPodcast.length < 6) {
                const randomIndex = Math.floor(Math.random() * podcast.length);
                randomPodcast.push(podcast[randomIndex])
            }
            return randomPodcast;
        }

       /* changes the setRandomPodcast everytime the podcast prop changes in the header which gets passed to 
       * the carousel component which changes the prop after every transition which is controlled in the css class
       *
       */
        useEffect(() => {
            setRandomPodcast(getRandomPodcast(podcast))
        }, [podcast])

        /* a short check statement to ensure that the passed prop contains the correct data
        *
        */
       if(!podcast || podcast.length === 0 || !podcast[0]?.image) {
        return null;
       }

        const settings = {
            dots: true,
            infinite: true,
            speed: 250,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: "linear",
            autoplay: true,
            autoplaySpeed: 5000,
        };

        /* arrow images function only used to advance the slide by 1 frame left or right depending on 
        * what the user clicks
        *
        */
       const goToNextSlide = () => {
        slider.slickNext();
       }
       const goToPrevSlide = () => {
        slider.slickPrev();
       }
       let slider;

    return (
    <div className="carousel">
        {randomPodcast.length > 0 ? (
        <div>
            <img
            src={leftArrowImage}
            alt="Previous"
            className="arrow--left-arrow"
            onClick={goToPrevSlide}
            />
            <Slider ref={(c) => (slider = c)} {...settings}>
            {randomPodcast.map((podcastItem) => (
                <div key={podcastItem.id}>
                <img 
                    src={podcastItem.image}
                    alt={podcastItem.title} 
                />
                </div>
            ))}
            </Slider>
            <img
            src={rightArrowImage}
            alt="Next"
            className="arrow--right-arrow"
            onClick={goToNextSlide}
            />
        </div>
        ) : (
        <div>
            <div className="loading--screen">
            <img    
                className="loading--image" 
                src="./src/img/ouroboros.png" 
                alt="Loading snake"
            />
            <div className="loading--text">Loading...</div>
            </div>
        </div>
        )}
    </div>
    );
}