import React, { useState } from 'react';
import { TextField, Autocomplete, Button } from '@mui/material';
import {Fruits,key} from '../../../SharedData';
const FruitsSurvey = () => {

    const [name,setName] = useState('');
    const [selectedvalue,setSelectedvalue] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name,selectedvalue);
    }
  return (
    <form onSubmit={handleSubmit}>
        <TextField style={{marginBottom:'10px'}} variant="standard" value={name} onChange={(e) =>setName(e.target.value)}/>
        <Autocomplete 
        style={{width:'250px',marginBottom:'10px',marginLeft:'42%'}} 
        value={selectedvalue} 
        onChange={(_,newvalue) => setSelectedvalue(newvalue)}
        options={Fruits} 
        renderInput={(params) => (
            <TextField {...params} label='Fruits' variant='outlined' />)}
        />
        <Button type='submit'>Submit</Button>
        <p>{key}</p>
    </form>
  )
}

export default FruitsSurvey;