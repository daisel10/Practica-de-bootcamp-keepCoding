import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
// componenstes

// types
import { TypeLogin } from "../../Types/Login";
// css
import "./Login.css";
import { setAutho } from "../../redux/action/action";
import { login } from "../../api/service/accessibility";

const Login: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: TypeLogin) => {
    try {
      const credenciales: TypeLogin = {
        email: values.email,
        password: values.password,
      };
      const loggin = await login(credenciales, values.remember);

      
      dispatch(setAutho({remember:true,token:loggin}));

      const to = location.state?.from?.pathname || "/home";
      navigate(to, { replace: true });

    } catch (error) {
      
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="div">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="Login"

        //wrapperCol={{ offset: 8, span: 16 }}
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input className="input" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password className="input" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox className="input">Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
