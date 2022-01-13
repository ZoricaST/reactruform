import React from 'react'
import InputRadio from './InputRadio'
import InputText from './InputText'
import CheckForma from './CheckForma'
import SelectForma from './SelectForma'

const MojaForma = () => {
   
    return (
      <div class="container">
<form >

  <InputText nameLabel='Ime: '/>
  <InputText nameLabel='Prezime: '/>
  <br/>
  <InputRadio 
  radioTextNaslov='Izaberi svoj omiljeni Web jezik:'
  />

  <CheckForma  labelForSelect='cars' checkTextNaslov='Checkboxes' />
  <br/>

  <SelectForma labelSelectText='Izaberi kola:' />
 
  <input type="submit" value="Submit"/>

</form>

</div>
    )
}

export default MojaForma
