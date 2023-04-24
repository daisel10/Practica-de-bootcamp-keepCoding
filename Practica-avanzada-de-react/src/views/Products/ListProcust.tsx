import { useNavigate,Link } from 'react-router-dom';
import Product from "./CardProducts";
import { TypeProducts } from "../../Types/Products";
import { Button } from 'antd'



import './ListProducst.css'



const ListProducts = ({ product }: { product: Array<TypeProducts>}) => {
  const navigate = useNavigate();
  
 const click = ()=>{
  navigate('/home/newAdverts', { replace: true });

 }

   if (product.length===0) {
    return(<div className="ListProducts">
      <h1>No se encontro lo que buscabas,quieres crear el primero </h1>
      <Button onClick={click} >
            Click
          </Button>
    </div>)
   }

  
  return (
    <div className="ListProducts">
      {product.map((produc) => {
        return <Link to={`/home/${produc.id}`} className="link" key={produc.id} ><Product {...produc} /></Link>;
      })}
    </div>
  );
};

export default ListProducts;
