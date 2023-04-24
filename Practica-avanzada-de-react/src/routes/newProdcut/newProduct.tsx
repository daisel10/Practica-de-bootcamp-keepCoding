import React, { useState, useMemo } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import {
  Form,
  Input,
  Radio,
  Select,
  InputNumber,
  Upload,
  Button,
  Space,
} from "antd";
import Header from "../../components/common/Header";
import { useDispatch } from "react-redux";
import { createProducts } from "../../api/service/setProducts";
import { idOfProducts } from "../../redux/action/action";

const NewProduct = () => {
  const navigate = useNavigate();
  const dispatch= useDispatch()

  const onFinish = async ({
    name,
    sale,
    price,
    tags,
  }: {
    name: string;
    sale: boolean;
    price: number;
    tags: string;
  }) => {
    const data = { name, sale, price, tags: [tags] };

    try {
      const crearProducts: any = await createProducts(data);
      dispatch( await idOfProducts(crearProducts.id))

      navigate(`/home/${crearProducts.id}`);

    } catch (error: any) {
      if (error.status === 401) {
        navigate("/login");
      }
      if (error.message === "Unauthorized") {
        navigate("/login");
      }
    }
    return {};
  };

  return (
    <>
      <Header></Header>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
      >
        <Form.Item label="Descripcion" name="sale" rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value={false}> Compra </Radio>
            <Radio value={true}> venta </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Etiquetas" name="tags" rules={[{ required: true }]}>
          <Select>
            <Select.Option value="lifestyle">lifestyle</Select.Option>
            <Select.Option value="mobile">mobile</Select.Option>
            <Select.Option value="motor">motor</Select.Option>
            <Select.Option value="work">work</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="precio" name="price" rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>

        <Form.Item label="Upload" name="photo">
          <Upload listType="picture-card" name="photo">
            <div>
              <PlusOutlined name="photo" />
              <div style={{ marginTop: 1 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space wrap>
            <Button type="primary" htmlType="submit" danger>
              Crear
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
export default NewProduct;
