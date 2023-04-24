import React from "react";
import { Card } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./ListProducst.css";

import { TypeProducts } from "../../Types/Products";
import DeletedButtom from "../../components/common/DeletedButton";
import { useDispatch } from "react-redux";
import { setDeletedProducts } from "../../redux/action/action";

import placeholder from "../../components/images/placeholder.png"
const { Meta } = Card;

const IdCard = ({
  id,
  createdAt,
  name,
  sale,
  price,
  tags,
  photo,
}: TypeProducts) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnDeleted = () => {
    dispatch(setDeletedProducts(id));
    const to = location.state?.from?.pathname || "/home";
    navigate(to, { replace: true });
  };
  return (
    <Card
      hoverable
      title={name}
      style={{ width: 240 }}
      cover={<img alt="example" src={photo  || placeholder} />}
      extra={<DeletedButtom onClick={handleOnDeleted} />}
    >
      {createdAt}
      <br />
      <b>{sale ? "Sell" : "Buy"}</b>

      <Meta description={tags} prefixCls="hoal" />
      {price}
    </Card>
  );
};

export default IdCard;
