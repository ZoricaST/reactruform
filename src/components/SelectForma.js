import React from 'react'

const SelectForma = (props) => {
    const options = [
        {
        id:1,
        valueSelectItem:'volvo',
        nameSelectItem:'Volvo',
        },
        {
        id:2,
        valueSelectItem:'saab',
        nameSelectItem:'Saab',
        }, 
        {
        id:3,
        valueSelectItem:'opel',
        nameSelectItem:'Opel',
        },
        {
        id:4,
        valueSelectItem:'audi',
        nameSelectItem:'Audi',
        },
        ]
    
    return (
        
        <div  >
             <label for={props.labelForSelect} ><h2>{props.labelSelectText}</h2></label>
             
  <select name={props.labelForSelect} id={props.labelForSelect}>
  {options.map((option) => (<option key={option.id}  value={option.valueSelectItem}>{option.nameSelectItem}</option>))} 
   
  </select>
        </div>
    )
}

export default SelectForma
