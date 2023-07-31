import React from "react";

/* main sorting function that uses the handleSelectChange parameter. it loads all the 
* objects found in the handleSelectChange function 
*
*/
export default function PodcastSorting({ handleSelectChange }) {
    const sortingOptions = [
        "--sort--",
        "A-Z",
        "Z-A",
        "Recent - Oldest",
        "Oldest - Recent",
        "Genres",
        "Favourites",
    ];

    /* function that handles the sorting logic using the values in the sortingOptions 
    * constant. it uses this logic with the proper key to determine what to do when the 
    * user chooses the respective select option
    *
    */
    const handleSortingChange = (event) => {
        const selectedOption = event.target.value;
        handleSelectChange(selectedOption);

    }

    return (
        <div className="podcast--sorting">
            <select onChange={handleSortingChange}>
                {sortingOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}