import React, { useState } from 'react';
import '../assets/css/basicform.css';

const BasicForm = () => {

    const [name,setName]=useState("");
    const [email,setMail]=useState("");
    const [message,setMessage]=useState("");



    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name+" "+email+" "+message);
    }

    const handleName =(Event)=>{
        setName(Event.target.value);
    }
    const handleMail =(Event)=>{
        setMail(Event.target.value);
    }
    const handleMessage =(Event)=>{
        setMessage(Event.target.value);
    }


  return (
    <>
    <form className='form' method='POST' onSubmit={handleSubmit}>
        <div className="input_fields">
            <table className = "table">
            <tr>
                <td><label htmlFor="name">Name:</label></td>
                <td><input type="text" name="Name" id="Name" required minLength={4} maxLength={15} onChange={handleName}/></td>
            </tr>
            <tr>
                <td><label htmlFor="email">email:</label></td>
                <td><input type="email" name="email" id="email" onChange={handleMail}/></td>
            </tr>
            <tr>
                <td><label htmlFor='message'>Message:</label></td>
                <td><textarea label='message' onChange={handleMessage}></textarea></td>
            </tr>
            <tr>
                <td colSpan={2}><button type="submit">Submit</button></td>
            </tr>
            </table>
        </div>
    </form>
    </>
  )
}

export default BasicForm;