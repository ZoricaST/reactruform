import React from 'react'

const InputText = (props) => {
    return (
        <div>
             <label>
                {props.nameLabel}
                <input type='text' name='name'/>
            </label>
        
        </div>
    )
}

export default InputText
