import React from "react";
import { useState } from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch , setPageNumber }) => {
  const [searchText, setSearchText] = useState("");
  const [resultsFound, setResultsFound] = useState(true);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    setPageNumber(1);
    setResultsFound(true);
  };

 

  return (
    <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
        <input 
        onChange={e => setSearchText(e.target.value)}
        value={searchText}
        placeholder="Search for Characters" 
        type="text" 
        className={styles.input} 
 
        />

        <button 
        onClick={handleSearch}
         className={`${styles.btn} btn btn-success fs-5`}>
            Search
        </button>

        {!resultsFound && (
          <p className={styles.noResults}>No results found for "{searchText}"</p>
          
        )}


    </form>
  
  )
}

export default Search;


// import React from "react";
// import styles from "./Search.module.scss";

// const Search = ({ setSearch , setPageNumber }) => {
//   return (
//     <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
//         <input 
//         onChange={e=>{
//             setPageNumber(1);
//             setSearch(e.target.value)
//         }}
//         placeholder= "Search for Characters" 
//         type="text" 
//         className={styles.input}
//         />

//         <button 
//         onClick={(e)=>{e.preventDefault();
       
//         }}
//          className={`${styles.btn} btn btn-success fs-5`}>
           
//             Search
            
//         </button>
//     </form>
//   )
// }

// export default Search

