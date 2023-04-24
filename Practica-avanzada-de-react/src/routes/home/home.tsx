// library
import { useEffect, useState } from "react";
import { Col, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
// components
import Searcher from "../../components/common/Searcher";
import ListProducts from "../../views/Products/ListProcust";
import { getLatestProducts } from "../../api/service/setProducts";

import { setLoading, setProducts } from "../../redux/action/action";

// type
import { TypeProducts } from "../../Types/Products";



//css
import "./index.css";
import Header from "../../components/common/Header";


//{products, setProducst}:{products:any; setProducst:any;}

const Home = () => {
  let products = useSelector((state: any) => state.Reducer.products);
  const loading = useSelector((state: any) => state.Reducer.loadingProducts);
  const stautsSearch = useSelector((state: any) => state.Reducer.stautsSearch);
  
  const searchProducts = useSelector((state: any) => state.Reducer.Search);

  

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGetProducts = async () => {
      try {
        dispatch(setLoading(true));
        // relogin();
        const getproducts = await getLatestProducts();
        dispatch(setProducts(getproducts));
        dispatch(setLoading(false));
      } catch (error) {
        console.log(
          "🚀 ~ file: index.tsx:40 ~ fetchGetProducts ~ error",
          error
        );
      }
    };
    fetchGetProducts();
  }, []);

  return (
    <div>
      <Col span={10} offset={10} className="Searcher">
        <Header></Header>
      </Col>
      <Col span={9} offset={9} className="Searcher">
        <Searcher />
      </Col>

      {loading ? (
        <Col offset={12} span={3}>
          <Spin spinning size="large" />
        </Col>
      ) : ( stautsSearch ?<ListProducts product={searchProducts} />:
        <ListProducts product={products} />
      )}
    </div>
  );
};

export default Home;
