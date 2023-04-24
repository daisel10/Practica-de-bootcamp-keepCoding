import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import Page from "../common/Page"
import Button from "../common/Button";
import FormField from "../common/FormField";

import { relogin } from '../petitions/service'
import { createTweet } from '../petitions/serviceAdverts'

const NewAdverts = () =>{
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [sale, setSale] = useState('')
    const [price, setPrice] = useState(Number)
    const [tags, setTags]  = useState('')
    const [img, setImg] = useState('')
    
    const handleName= event => setName(event.target.value)
    const handlePrice= event => setPrice(event.target.value)
   // const handleImg= event => setImg(event.target.value)
   const handleImg= event => setImg(event.target.files[0])
  

    let photo=''
   img ==='' ? photo=null : photo=img
    const datos = {
        name: name,
        sale: sale,
        price: price,
        tags: [tags],
        //photo:img
        // cada vez que intento enviar con foto no me permite porque me dice que la propiedad de be existir
      }
    
    const submit = async event=>{
        event.preventDefault();
        try{
            relogin()
            console.log(datos)
            const crearAdverts = await createTweet(datos)
            navigate(`/adverts/${crearAdverts.id}`);
        } catch (error){
            console.log(error)
            if (error.status === 401) {
                navigate('/login');
              }
              if (error.message==='Unauthorized') {
                navigate("/login")
              }
        }
    }

    const isButtonEnabled = useMemo(()=>{
        let ifIsEmpty = Boolean
        sale === '' ? ifIsEmpty=false: ifIsEmpty=true

        return name && ifIsEmpty && price && tags;
        },[name,sale, price, tags])
        
   return( 
<Page>
    <form onSubmit={submit}>
        <h1>New adverts</h1>
        
        <FormField
        type="text"
        placeholder="The name"
        value={name}
        onChange={handleName}
        label='name'
        />
        <FormField
        type="number"
        placeholder="The price "
        value={price}
        onChange={handlePrice}
        label='The price'
        />
        <h2>Imagen</h2>
        <input type="file" id="photo" name="photo" onChange={handleImg} />
        

        <h2>Sale</h2>
        <input value={sale} type="radio" id="sale" name="sale" onChange={()=>{setSale(false)}} />
        <label name="sale">Buy</label><br/>
        <input value={sale} type="radio" id="sale" name="sale"  onChange={()=>{setSale(true)}}/>
        <label name="sale">Sell</label><br/>

        <h2>Tags</h2>
        <input value={tags} type="radio" id="tags" name="tags" onChange={()=>{setTags("lifestyle")}} />
        <label name="tags">lifestyle</label><br/>
        <input value={tags} type="radio" id="tags" name="tags"  onChange={()=>{setTags("mobile")}}/>
        <label name="tags">mobile</label><br/>
        <input value={tags} type="radio" id="tags" name="tags" onChange={()=>{setTags("motor")}} />
        <label name="tags">motor</label><br/>
        <input value={tags} type="radio" id="tags" name="tags"  onChange={()=>{setTags("work")}}/>
        <label name="tags">work</label><br/>

        <Button
        disabled={!isButtonEnabled}
        type="submit"
        >Post
        </Button>
    </form>
</Page>)

}
export default NewAdverts;