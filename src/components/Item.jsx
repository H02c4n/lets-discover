import React from "react"
export default function Item ({itemDetails}){
    if (itemDetails.preview) {
    }
    return(
    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
        <div className="row mb-4">
            <div className="col-12">
                <img className="img-fluid" src={itemDetails.preview ? itemDetails.preview.source : ""} alt=""/>
            </div>
        </div>
        <h1 className="mb-3">{itemDetails.name ? itemDetails.name:""}</h1>
        <p>{itemDetails.wikipedia_extracts ? itemDetails.wikipedia_extracts.text:""}</p>
        
    </div>
    )
}