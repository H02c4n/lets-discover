import React from "react";


export default function Header({city}){
    return(
        
        <h1 className="text-center">
          Let's <span className="text-info">Discover</span> The
          <span className="text-info"> {city ? city.toUpperCase():"World"} </span>Together
        </h1>
      
    )
}