import React from "react";
import FilterBTN from "../FilterBTN";



const Status = ({setStatus, setPageNumber}) => {
  const status = ["Alive", "Dead", "Unknown"];
  return (
    <div className= "accordion-item">
    <h2 className="accordion-header">

     <button 
      className="accordion-button collapsed text-white bg-success" 
   
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#collapseOne" 
      aria-expanded="true" 
      aria-controls="collapseOne"
      
      >
       Status 

      </button>
    </h2>
    <div 
    id="collapseOne" 
    className="accordion-collapse collapse "

    data-bs-parent="#accordionExample">

      <div className="accordion-body " 
      >
         

        {status.map((items,index)=> ( 
        
        <FilterBTN 
        task = {setStatus}
        setPageNumber={setPageNumber}
        key= {index} 
        name= "status" 
        index = {index} 
        items= {items}
        />
         
        ) )}
    
      </div>
    </div>
         </div>
  )
}

export default Status