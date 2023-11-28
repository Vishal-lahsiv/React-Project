import React, { useEffect,useState} from 'react';
const ReactApp=()=>{
    const [message,setMessage]=useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setMessage('Great.... This is time to learn about HOOKS');
        },2000)
    })
    return(
        <>
            <p>Hello dear one, learning React...?</p>
            <p>{message}</p>
            
        </>
    )
}
export default ReactApp;