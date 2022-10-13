import React from "react"

export default function Info({numOfPlaces, city}){
    return(
        <>{city.name ? <div id="info" className="alert alert-primary"><p>{city.name}, {city.country}</p><p>{numOfPlaces} objects with description in a 1km radius</p></div> :""}
        </>
    )
}