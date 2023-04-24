import React from "react";
import { Card } from "antd";
import "./ListProducst.css";

import { TypeProducts } from "../../Types/Products";
import DeletedButtom from "../../components/common/DeletedButton";
import { useDispatch } from "react-redux";
import { idOfProducts, setDeletedProducts } from "../../redux/action/action";
import placeholder from "../../components/images/placeholder.png"
const { Meta } = Card;


const Product = ({ id, name, sale, price, tags, photo }: TypeProducts) => {
  const dispatch = useDispatch();

  const handleOnDeleted = () => {
    dispatch(setDeletedProducts(id));
    
  };
  const handleOnID = async ()=>{
    dispatch( await idOfProducts(id))
  }
  return (
    <Card
      hoverable
      title={name}
      style={{ width: 240 }}
      cover={<img alt="example" src={photo  || placeholder} />}
      extra={<DeletedButtom onClick={handleOnDeleted} />}
      onClick={handleOnID}
    >
      <b>{sale ? "Sell" : "Buy"}</b>
      <Meta description={tags} prefixCls="hoal" />
      {price}
    </Card>
  );
};

export default Product;
