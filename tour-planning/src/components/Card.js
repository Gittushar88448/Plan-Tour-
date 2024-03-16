
import React, { useState } from "react";
function Card({id, name , image, info ,price, clickHandler}){

    const [readmore , setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0 , 200)}...`;
    function readmoreHandler(){
        setReadMore(!readmore);
    }
    return(

        <div>
            <img src={image} className="image"></img>

            <div>
                <div>
                    <h2>₹ {price}</h2>
                    <h2>{name}</h2>
                </div>
                <div>
                    {description }
                    <span onClick={readmoreHandler}>
                        {readmore ? `Show Less`:`Read More`}
                    </span>
                </div>
            </div>
            <button onClick={() => clickHandler(id)}>Not Interested</button>
        </div>
    )
}

export default Card;