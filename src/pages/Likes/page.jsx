import React from "react";
import { useSelector } from "react-redux";


function Likes() {
    const likes = useSelector((state)=>state.likes)
    console.log(likes);
    
    return(
        <div className="cont">
            {
                likes.map((el,i)=>{
                    return(
                        <div key={i}>
                            <img src={el.src.medium} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Likes