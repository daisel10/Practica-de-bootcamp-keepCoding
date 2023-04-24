import { useEffect, useState,  } from 'react'
import { useNavigate,Link } from 'react-router-dom';

import { getLatestTweets } from '../petitions/serviceAdverts'
import Page from "../common/Page"
import Advert from '../common/advert.js'
import Button from '../common/Button'
import FormField from '../common/FormField'
import { relogin } from '../petitions/service'

const EmptyList = () => (
    <div style={{ textAlign: 'center' }}>
      <p>Be the first one!</p>
      <Button as={Link} to="/tweets/new" variant="primary">
        Create Advert
      </Button>
    </div>
  );
  const useAdverts = () => {
    const navigate = useNavigate();
    const [adverts, setAdverts] = useState([]);
  
    useEffect(() => {
      const execute = async () => {
        try {
          await relogin()
          const adverts = await getLatestTweets();
          setAdverts(adverts);
          
        } catch (error) {
          
          if (error.message==='Unauthorized') {
            navigate("/login")
          }
        }
        
      };
      execute();
      
    }, []);
    return adverts;
}

const Adverts = props =>{
    let adverts = useAdverts()
    
    /*
createdAt: "2022-11-17T04:32:22.000Z"
id: "0d48b9b1-7a93-4a49-8e23-ac973ba3a9d7"
name: sandalias"
photo: null
price: 120000
sale: false
tags: Array(1): 
"mobile"
*/
    
    const [name, setName] = useState('')
    console.log(typeof name)
    const [sale, setSale] = useState()
    const [price, setPrice] = useState(Number)
    const [tags, setTags]  = useState('')
    const [filterTags, setFilterTags] = useState([])

    const advertsFilter = adverts.filter((advert)=>{
      //sale=== '' ? sale = Boolean : sale 
      if (advert.sale === sale ){
        return true;
      }
      return false
})

    const hadleFilter= event=>{
      event.preventDefault();
     // adverts = advertsFilter

      //console.log(adverts);
    }



    const borrarItemen= function (array,a) {
      for (var i = 0; i < array.length; i++) {
       if (array[i] == a) {
        for (var i2 = i; i2 < array.length - 1; i2++) {
         array[i2] = array[i2 + 1];
        }
        array.length = array.length - 1;
        return;
       }
      }
     };
     const tagsInFileter = (filterTags,tags) =>{
      filterTags.includes(tags) ? borrarItemen(filterTags,tags) : filterTags.push(tags)
      return filterTags
     }
     
    const handleName= event => setName(event.target.value)
    const handlePrice= event => setPrice(event.target.value)

   // useEffect(()=>{
     // setFilterTags(tagsInFileter(filterTags,tags))

    //},[setFilterTags,tagsInFileter,filterTags,tags])

    function a(){
      setFilterTags(tagsInFileter(filterTags,tags))
    }
    



    return(
        <Page title="Do you want to buy?" {...props}>

        <form onSubmit={hadleFilter}>
          <h1>Filtros</h1>
          <FormField
          type="text"
          placeholder="The name"
          value={name}
          onChange={handleName}
          label='name'
          />
          <br/>
          <FormField
          type="number"
          placeholder="The price"
          value={price}
          onChange={handlePrice}
          label='price'
          />
          <h2>Sale</h2>
          <input value={sale} type="radio" id="sale" name="sale" onChange={()=>{setSale(false)}} />
          <label name="sale">Buy</label><br/>
          <input value={sale} type="radio" id="sale" name="sale"  onChange={()=>{setSale(true)}}/>
          <label name="sale">Sell</label><br/>
          <h2>Tags</h2>
          <input value={tags} type="checkbox"  onChange={()=>{setTags("lifestyle")}} onClick={a} />
          <label name="tags">lifestyle</label><br/>
          <input value={tags} type="checkbox" onChange={()=>{setTags("mobile")}}/>
          <label name="tags">mobile</label><br/>
          <input value={tags} type="checkbox"  onChange={()=>{setTags("motor")}} />
          <label name="tags">motor</label><br/>
          <input value={tags} type="checkbox" onChange={()=>{setTags("work")}}/>
          <label name="tags">work</label><br/>
          <Button  variant="primary"
        className="loginForm-submit"  >Filter</Button>
          <Button>Reset</Button>
          
        </form>
        <h1>Anuncios</h1>
            <div>
        {adverts.length ? (
          <ul>
            
            {adverts.map(adverts => (
              <li key={adverts.id}>
                <Link to={`/adverts/${adverts.id}`}>
                  
                  <Advert {...adverts} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
        </Page>
    
    )
}

export default Adverts
