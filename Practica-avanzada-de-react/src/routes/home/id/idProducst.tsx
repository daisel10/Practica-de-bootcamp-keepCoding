import { useParams } from "react-router-dom";
import Header from "../../../components/common/Header";
import { Col } from "antd";
import { useDispatch, useSelector } from "react-redux";

import "./id.css";

import IdCard from "../../../views/id/IdCarts";

//4@uno.com
const DetailProducst = () => {
  const product = useSelector((state: any) => state.Reducer.id);

  return (
    <div>
      <Col offset={10} span={10} className="header">
        <Header></Header>
      </Col>

      <Col offset={10} span={10}>
        <IdCard {...product} />
      </Col>
    </div>
  );
};

export default DetailProducst;
