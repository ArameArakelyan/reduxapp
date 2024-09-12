import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../Costume hooks/useFetch";
import PhotoBox from "../../components/photobox/photoBox";

function Search() {
    const [value, setValue] = useState("")
    const [text, setText] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        e.stopPropagation();  
        setText(value) 
        setValue("")
    }
    let photos = useFetch(text)
    return (
        <div className="root">
            <form onSubmit={onSubmit}>
                <input className="inp" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search..." />
                <button className="btn">Search</button>
            </form>

            <div className="cont">
               {photos.map((el,i)=>{
                return(
                    <PhotoBox key={i} photo={el}/>
                )
               })}
            </div>
        </div>
    )
}

export default Search