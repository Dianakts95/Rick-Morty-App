import React from 'react'

const InputGroup = ({total, name, setID}) => {

  return (
    <div className="input-group mb-3">
    
    <select 
    onChange={(e)=> setID(e.target.value)}
    className="custom-select" id={name}>
      <option value = "1" selected>Choose...</option>

      {[...Array(total).keys()].map((index)=>{
        return (
       <option value={index + 1}>
        {name} - {index + 1}
        </option> );
      })}
      
    </select>
  </div>
  )
}

export default InputGroup