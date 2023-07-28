import React from 'react';
import { useState, useEffect } from 'react';


function Data() {
const url = "https://podcast-api.netlify.app/shows"

const [podcast, setPodcast] = useState([]);

const fetchInfo = () => {
    return fetch(url)
        .then((res) => res.json())
        .then((d) => setPodcast(d))
}

useEffect( () => {
    fetchInfo();
}, []);

return(
    <div>
        {podcast.map((dataObj, index) => {
            return (
                <div className="podcast">
                    <div>{dataObj.title}</div>
                    {/* <img src={dataObj.image}></img> */}
                </div>
            )
        }
        )}
    </div>
)

}
export default Data 