import React from "react";
import {useParams} from "react-router-dom";

const CardDetails = () => {
    const {id}= useParams();
  return (
    <div>CardDetails{id}</div>
  )
}

export default CardDetails