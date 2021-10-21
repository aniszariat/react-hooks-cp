import React from 'react'
import { SelectRating } from './RateComp'
function Filter({movielistF}) {
    
    const handleSelect =()=> {movielistF(SelectRating.defaultvalue)};
   // const a = SelectRating.defaultvalue 
    return (
        <div>
                <SelectRating onClick={handleSelect}>  
            
            <h1>Select the rating</h1>
                </SelectRating> 
        </div>
    )
}

export default Filter;
