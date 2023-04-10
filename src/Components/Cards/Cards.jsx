import React from "react";
import {Link} from "react-router-dom";
import styles from "./Cards.module.scss";

const Cards = ({results, page}) => {

    let display ;

    if (results) {
        display = results.map(({id, name, image, location, status})=>{
            return (

                

                <Link
                
                style={{textDecoration:"none"}}
                
                to={`${page}${id}`}
                key = {id} 
                className= "col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"> 

                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                <img src={image} alt="" className={`${styles.img} img-fluid`} />
                <div style={{padding:"10px"}} className="content">
                <div className="fs-3 fw -bold mb-4">{name}</div>
                <div className="">
                        <div className="fs-6 ">Last location</div>
                        <div className="fs-5">{location.name}</div>
                        </div>
                     </div>
                    </div>
                    {(()=>{
                        if(status === "Dead"){
                            return(
                                <div className={`${styles.badge} position-absolute badge bg-danger`}> {status}</div>
                            );
                        }
                        else if (status === "Alive"){
                            return(
                                <div className={`${styles.badge} position-absolute badge bg-success`}> {status}</div>
                            );

                        } else {
                            return(
                                <div className={`${styles.badge} position-absolute badge bg-secondary`}> {status}</div>
                            );
                        }
                    })()}
               
                </Link>
            
            );
        });
    }  else{
          
        }
    


  return (

    <>{display}</>

  )
}

export default Cards;