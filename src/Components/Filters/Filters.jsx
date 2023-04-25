import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";



const Filters = ({ setStatus, setPageNumber, setGender, setSpecies}) => {
 const clear=()=>{
  setStatus("") 
  setPageNumber("")
  setGender("")
  setSpecies("")
  window.location.reload(false);
 }
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center"> <span className="bg-white fw-bold fs-4 mb-2">Filters</span></div>
      <div className="text-center"
      onClick={clear}
      style={{cursor:"pointer"}}>
      <span  className="text-black bg-white fw-bold text-decoration-underline mb-4"
      >
         Clear Filters
         
      </span> </div>

      <div 
      className="accordion " 
      id= "accordionExample"
     
      >
        
      <Status  setStatus={setStatus} setPageNumber={setPageNumber}  />
      <Gender  setGender={setGender} setPageNumber={setPageNumber} />
      <Species setSpecies={setSpecies} setPageNumber={setPageNumber}   />
      
      {/* //accordion-button:focus 
 
 // border-color: var(--bs-accordion-btn-focus-border-color);
  /* outline: 0; */
  /* box-shadow: var(--bs-accordion-btn-focus-box-shadow); */}
         
         
      </div>

    </div>
  )
}

export default Filters;