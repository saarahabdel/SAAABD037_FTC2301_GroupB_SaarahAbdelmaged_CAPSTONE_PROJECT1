import { useEffect, useState } from 'react';
import '../App.css'
const Search =() => {

//     const [error, setError] = useState(null);
//       const [isLoaded, setIsLoaded] = useState(false);
//       const [items, setItems] = useState([]);


//       //     set search query to empty string
//       const [q, setQ] = useState("");
//       
//       const [searchParam] = useState(["title"]);

//       // Note: the empty deps array [] means
//       // this useEffect will run once
//      
//       useEffect(() => {
//         fetch("https://podcast-api.netlify.app/shows")
//           .then(res => res.json())
//           .then(
//             (result) => {
//               setIsLoaded(true);
//               setItems(result);
//             },
//             // Note: it's important to handle errors here
//             // instead of a catch() block so that we don't swallow
//             // exceptions from actual bugs in components.
//             (error) => {
//               setIsLoaded(true);
//               setError(error);
//             }
//           )
//       }, [])


//       /* here we create a function 
// //     we filter the items
// // use array property .some() to return an item even if other requirements didn't match
//     */
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

//       return (
//         <div className="wrapper">
//             <div className="search-wrapper">
//                 <label htmlFor="search-form">
//                     <input
//                         type="search"
//                         name="search-form"
//                         id="search-form"
//                         className="search-input"
//                         placeholder="Search for..."
//                         value={q}
//                         /*
//                         // set the value of our useState q
//                         //  anytime the user types in the search box
//                         */
//                         onChange={(e) => setQ(e.target.value)}
//                     />
//                     <span className="sr-only">Search countries here</span>
//                 </label>
//             </div>
//             {search(items).map((item) => (
//                         <li>
//                         <div key={item.id} className="podcast-item">
//                             <div>
//                             <img 
//                                 className="podcast-image" 
//                                 src={item.image} 
//                                 alt={item.title} width='300vw' height='300vh'
//                             />
//                             </div>
//                             <div className="podcast-info">
//                                 <h2 className="podcast-title">{item.title}</h2>
//                                 <br></br>
//                                 {/* <h3 className="podcast-updated">Updated Date: {formatDate(show.updated)}</h3> */}
//                                 <br></br>
//                                 <h3 className="podcast-seasons">Seasons: {item.seasons}</h3>
//                                 <br></br>
//                                 {/* <h3>Description:</h3>
//                                 <div className={`podcast-description ${
//                                     showDescriptionId === show.id ? "show" : ""}`} >
//                                     {show.description}
//                                 </div> */}
//                                 {/* <p className="show-genres">Genres: {mappedGenres.join(", ")}</p> */}
//                                 <br></br><br></br><br></br>
//                                 {/* <Link to={`/podcast/${show.id}`}>
//                                 <button className="view-seasons-button">VIEW SEASONS</button>
//                                 </Link> */}
//                             </div>
//                         </div>
//                         </li>
//                     ))}
//         </div>
//     );

      

}

export default Search 