import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteAdverts } from '../petitions/serviceAdverts.js';
import Button from './Button.js';


const DeleteAdverts = ({ id }) =>{
    const [delet, setDelete] = useState(true)
    const [realDelet, setRealDelete] = useState(false)
    const [errors, setError] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        if(realDelet){
            deleteAdverts(id).then(a =>{
            navigate('/adverts')
            }).catch(error =>{
            setError(!errors)
           
            })
        }
    }, [realDelet,id,setError,errors,navigate])
   
    return(
        <>
        
    <Button onClick={()=>setDelete(!delet)}>Delete</Button><br/>
    {delet ? '' :(<div><label>do you want to delete?</label>
    <Button onClick={()=> setRealDelete(!realDelet)}>Yes</Button>
    <Button onClick={()=>{setDelete(!delet)
    if (errors) {
        setError(!errors)
    }
    }}>Cancel</Button>
    
    </div>)}
    {errors ? 'hubo un error intente mas tarde':''}
        </>
)}

export default DeleteAdverts