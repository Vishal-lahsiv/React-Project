import React, { useState } from 'react'
import { TextField,Autocomplete } from '@mui/material'
import { Fruits } from '../shareddata'
import  Button from '@mui/material'
export const Fruitsurvey = () => {
    const [name,setname]=useState('');
    const [SelectedValue,SetSelectedValue]=useState(null);
    const handle=(Event)=>{
        console.log(name,SelectedValue);
    }
  return (
    <form onSubmit={handle}>
    <TextField id="standard-basic" label="Standard" variant="standard" value={name} onChange={(e)=>setname(
        e.target)}/>
       
    <Autocomplete options={Fruits} value={SelectedValue} onChange={(_, newvalue)=>
    SetSelectedValue(newvalue)}  
    renderInput={(params)=>(
        <TextField {...params} label="Fruits" variant='outlined'/>
    )}/>
    <Button type='submit'>submit</Button>
    </form>

  )
}
