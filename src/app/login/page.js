"use client";
import { ErrorMessage, Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import React from "react";
import "./style.css";
import { Space, Typography } from "antd";
import { Button } from "@/components/Button";
import { authLogin } from "./services/auth.services";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/features/adminAuthSlice";
const { Title } = Typography;
const { Option } = Select;
const initialValues = {
  user: "",
  password: "",
  type_user: "",
};
const Login = () => {
  const router = useRouter();
  const id = useSelector((state) => state.loginReducer.id);
  const dispatch = useDispatch();

  return (
    <div className="login-content">
      <div className="login-wrapper">
        <Formik
          initialValues={initialValues}
          onSubmit={({ user, password, type_user }) => {
            authLogin(user, password, type_user).then((res) => {
              console.log(type_user);
              if (res) {
                if (type_user === "administrador") {
                  router.push("/Dashboard/usuarios");
                  dispatch(login(res));
                } else {
                  router.push("/dashboarvendedor/productos");
                  dispatch(login(res));
                }
              }
            });
          }}
        >
          {() => (
            <Form className="form">
              <Title level={3}>Iniciar Sesión</Title>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Space
                  direction="vertical"
                  style={{
                    display: "flex",
                  }}
                  size={2}
                >
                  <Title level={5}>Usuario</Title>
                  <Input name="user" />
                  <ErrorMessage name="user" component="div" />
                </Space>
                <Space
                  direction="vertical"
                  style={{
                    display: "flex",
                  }}
                  size={2}
                >
                  <Title level={5}>Password</Title>
                  <Input type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </Space>
                <Space
                  direction="vertical"
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                  size={2}
                >
                  <Title level={5}>Tipo de Usuario</Title>
                  <Select
                    placeholder="Selecciona el tipo de usuario"
                    style={{ width: "100%" }}
                    name="type_user"
                  >
                    <Option value="administrador">Administrador</Option>
                    <Option value="vendedor">Vendedor</Option>
                  </Select>
                </Space>
              </Space>
              <div className="wrapper-button">
                <Button type="submit">Aceptar</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
