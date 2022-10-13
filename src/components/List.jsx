import React, { useState } from 'react';
import Item from "./Item"
import { Button, ListGroup } from 'react-bootstrap';

function List({places, nextFive, prevFive, offset}) {

  
  const [itemDetails, setItemDetails] = useState([]);

 function handleClick(id){
  const itemDetail = async (id) => {
    const url = `https://api.opentripmap.com/0.1/en/places/xid/${id}?apikey=5ae2e3f221c38a28845f05b67086197a9b692fe955df4ed765b9213a
    `;
    const res = await fetch(url);
    const data = await res.json();
    setItemDetails(data);
    
  };
  itemDetail(id);
};
  return (
    <div className='row'>
      <div className="col-md-6">
         <ListGroup as="ul">
      {places.map(place => {
        return(
          <ListGroup.Item className='hover' as="li" onClick={()=> handleClick(place.xid)} key={place.xid}>
        {place.name}
      </ListGroup.Item>
        )
      })}
      
    </ListGroup>
    {places.length > 0 ? <div className="d-flex justify-content-evenly mt-3">
      {offset >= 5 ?<Button onClick={prevFive} className='btn btn-info w-25'>Prev</Button> :""}
    {places.length === 5 ? <Button onClick={nextFive} className='btn btn-info w-25'>Next</Button> :""}
    
   </div> : ""}
      </div>
      <div className="col-md-6">
         <Item itemDetails={itemDetails} />
      </div> 
    </div>
  );
}

export default List;