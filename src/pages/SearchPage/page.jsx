import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
    const [value, setValue] = useState("")
    const photos = useSelector((state) => state.photos)
    const dispatch = useDispatch()
   console.log(photos);
   

    function onSubmit(e) {
        e.preventDefault()
        e.stopPropagation();   
        setValue("")
        dispatch({
            type: "SEARCH",
            payload: value
        })
    }

    return (
        <div className="root">
            <form onSubmit={onSubmit}>
                <input className="inp" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
                <button className="btn">Search</button>
            </form>

            <div className="cont">
               
            </div>
        </div>
    )
}

export default Search