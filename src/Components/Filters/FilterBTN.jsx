import React from 'react'

const FilterBTN = ({name, index, items, task, setPageNumber}) => {
  return (
  <div>
     <style jsx ="true">
       {`   
          .form-check-input:checked + label {
            background-color: #198754;
            color: black ;
          
           }

              input[type="radio"]{
              display:none;
             }

        `}
      </style>

    <div className="form-check ">

  <input 
  onClick={()=>{
    setPageNumber(1);
    task(items);
  }}

  className="form-check-input" 
  type="radio" 
  name={name} 
  id= {`${name}-${index}`}
  
   />
                  
  <label className="btn btn-outline-success  my-1" htmlFor={`${name}-${index}`}>
    {items}
    </label>
</div>


</div>
  );
};

export default FilterBTN;