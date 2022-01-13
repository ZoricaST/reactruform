import React from 'react'
import ElementRadio from './ElementRadio'

const InputRadio = (props) => {
    return (
        <div className=''>
           <h2>{props.radioTextNaslov}</h2>

<ElementRadio elementText='HTML' id='html'/>
<ElementRadio elementText='JS' id='js'/>
<ElementRadio elementText='CSS' id='css'/>
 
        </div>
    )
}

export default InputRadio
