import React from 'react'

const ElementRadio = (props) => {
    return (
        <>
          <input type="radio" id={props.id} name="fav_language" value={props.elementText}/>
          <label 
          for={props.elementText}
          >
              {props.elementText}</label><br/>  
        </>
    )
}

export default ElementRadio
