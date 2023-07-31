import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Search = () => {

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     const [q, setQ] = useState("");
//     const [searchParam] = useState(["title"])

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return date.toLocaleDateString();
//     };  

//     useEffect(() => {
//         fetch("https://podcast-api.netlify.app/shows")
//             .then((res) => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setItems(result);
//                 },
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             );
//     }, []);

//     function search(items) {
//         return items.filter((item) => {
//             return searchParam.some((newItem) => {
//                 return (
//                     item[newItem]
//                         .toString()
//                         .toLowerCase()
//                         .indexOf(q.toLowerCase()) > -1
//                 );
//             });
//         });
//     }

//     if (error) {
//         return (
//             <p>
//                 {error.message}, if you get this error, the free API I used
//                 might have stopped working, but I created a simple example that
//                 demonstrate how this works,{" "}
//                 <a href="https://podcast-api.netlify.app/shows">
//                     {" "}
//                     check it out{" "}
//                 </a>{" "}
//             </p>
//         );
//     } else if (!isLoaded) {
//         return <>loading...</>;
//     } else {
//         return (
//             <div className="wrapper">
//                 <div className="search-wrapper">
//                     <label htmlFor="search-form">
//                         <input
//                             type="search"
//                             name="search-form"
//                             id="search-form"
//                             className="search-input"
//                             placeholder="Search for..."
//                             value={q}
//                             /* 
//                             // set the value of our useState e
//                             //  anytime the user types in the search box
//                             */
//                             onChange={(e) => setQ(e.target.value)}
//                         />
//                         <span className="sr-only">Search countries here</span>
//                     </label>
//                 </div>
//                 <div>
//                     {search(items).map((item) => (
//                         <li>
//                             <div className='podcast-container' key={item.id}>
//                             <img src={item.image} width='300vw' height='300vh' alt="Podcast Image"></img>
//                             <p>{item.title}</p>
//                             {/* <p>{getTitle('1')}</p> */}
//                             <p>Seasons: {item.seasons}</p>
//                             <p>Last Updated: {formatDate(item.updated)}</p>
//                         </div>
//                         </li>
//                     ))}
//                 </div>
//             </div>
//         );   
// }}  
return (
   'Yeah'
)          
}

export default Search 