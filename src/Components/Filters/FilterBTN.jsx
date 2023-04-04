import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
  <div>
     {/* <style jsx ="true"> */}
      <style jsx>
      {/* arreglar 2:30 esta parte del attach el color en el filtro */}
        {`  
       
           .x: checked + label {
             background-color: #0dcaf0;
            
             }

              input[type="radio"]{
              display:none;
             }

        `}
      </style>

    <div className="form-check x">

  <input 
  onClick={()=>{
    setPageNumber(1);
    task(items);
  }}

  className="form-check-input" 
  type="radio" 
  name={name} 
  id={`${name}-${index}`}
  
   />
    {/* className=""                         htmlFor = */}
  <label class="btn btn-outline-primary my-1" for={`${name}-${index}`}>
    {items}
    </label>
</div>


</div>
  );
};

export default FilterBTN 