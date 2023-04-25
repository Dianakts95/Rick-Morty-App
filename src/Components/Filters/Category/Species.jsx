import React from "react";
import FilterBTN from "../FilterBTN";
import styles from "../Category/Filters.module.scss"

const Species = ({setSpecies , setPageNumber}) => {
  const species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
      className={`${styles.accordionbutton} accordion-button collapsed text-white bg-success`} 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#collapseThree" 
      aria-expanded="false" 
      aria-controls="collapseThree"
      >

       Species
       
      </button>
    </h2>
    <div id="collapseThree" 
    className="accordion-collapse collapse" 
    data-bs-parent="#accordionExample">
      <div className="accordion-body">
      {species.map((items,index)=> ( 
      <FilterBTN 
      task={setSpecies}
      setPageNumber={setPageNumber}
      key={index} 
      name="species" 
      index = {index} 
      items={items}
      />
      ) )}
    
      </div>
    </div>
         </div>
  )
}

export default Species