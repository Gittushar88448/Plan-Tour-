
import React, { useState } from "react";
function Card({id, name , image, info ,price, clickHandler}){

    const [readmore , setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0 , 200)}...`;
    function readmoreHandler(){
        setReadMore(!readmore);
    }
    return(

        <div className="card">

            <img src={image} className="image"></img>

            <div className="card-desc">

                <div className="price-name-pannel">

                    <h2 className="tour-price">₹ {price}</h2>
                    <h2 className="tour-name">{name}</h2>

                </div>

                <div className="desc-section">

                    {description }

                    <span onClick={readmoreHandler} className="readmore">
                        {readmore ? `Show Less`:`Read More`}

                    </span>
                </div>

            </div>

            <button onClick={() => clickHandler(id)} className="btn">Not Interested</button>
        
        </div>
    )
}

export default Card;