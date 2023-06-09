import React from "react";
import FilterBTN from "../FilterBTN";
import styles from "../Category/Filters.module.scss";

const Gender = ({setPageNumber, setGender}) => {
  

  const genders = ["Female", "Male", "Genderless", "Unknown"];
  
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
      className={`${styles.accordionbutton} accordion-button collapsed text-white bg-success`} 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#collapseTwo" 
      aria-expanded="false" 
      aria-controls="collapseTwo"
      >
       Gender
       
      </button>
    </h2>
    <div id="collapseTwo" 
    className="accordion-collapse collapse " 
    data-bs-parent="#accordionExample">
      <div className="accordion-body">

        {genders.map(( items, index)=>(
         <FilterBTN 
         task={setGender}
         setPageNumber={setPageNumber}

         key={index} 
         name="gender" 
         index={index} 
         items={items} 
                  
         />
        ))}
      
      </div>
    </div>
         </div>
  )
}

export default Gender