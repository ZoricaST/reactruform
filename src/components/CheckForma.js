import React from 'react'

const CheckForma = (props) => {
    const checks = [
        {
        id:1,
        textCheckElement:'Ja imam biciklu',
        forIdNameElementCheck:'vozilo1',
        valueElementCheck:'Bicikla',
        },{
            id:2,
            textCheckElement:'Ja imam kola',
            forIdNameElementCheck:'vozilo2',
            valueElementCheck:'Kola',
            },{
                id:3,
                textCheckElement:'Ja imam ladju',
                forIdNameElementCheck:'vozilo3',
                valueElementCheck:'Ladja',
                },
        ]
    return (
        <div>
       <h2>{props.checkTextNaslov}</h2>
     
       {checks.map((check) => ( 
        <>    
            <input 
            className='form-control-check'
            type="checkbox" 
            id={check.forIdNameElementCheck}
            name={check.forIdNameElementCheck}
            value={check.valueElementCheck}/>
            
            <label className='form-control-check' for={check.forIdNameElementCheck} > 
            {check.textCheckElement}
            </label>
            </>)
            )
            } 
        
        </div>
       
        
    )
}

export default CheckForma
