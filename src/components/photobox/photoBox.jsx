import React, { useState } from "react";
import { useDispatch } from "react-redux";


function PhotoBox({photo}) {
    const [isLiked, setisLiked]=useState(false)
     const dispatch = useDispatch()
     
    function handleClick() {
        if (isLiked===false) {
            photo.liked = true
            dispatch({
                type: "ADD",
                payload: photo
            })
            setisLiked(!isLiked)
        } else {
            photo.liked = false
            dispatch({
                type:"REMOVE",
                payload:photo
            })
        }
    }
    return (
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
            <img style={{marginBottom:"10px"}} src={photo.src.medium} alt="" />
            <button onClick={handleClick}>{photo.liked?"Dislike":"Like"}</button>
        </div>
    )
}

export default PhotoBox