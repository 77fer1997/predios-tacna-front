"use client";
import { ErrorMessage, Formik } from "formik";
import { Form, Input, Select } from "formik-antd";
import React from "react";
import "./style.css";
import { Space, Typography, Button } from "antd";
import { authLogin } from "./services/auth.services";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/features/adminAuthSlice";
import * as yup from "yup";

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
  const validationSchema = yup.object().shape({
    user: yup.string().required("Este campo es necesario."),
    password: yup.string().required("Este campo es necesario."),
    type_user: yup.string().required("Este campo es necesario."),
  });
  return (
    <div className="login-content w-full">
      <div className="login-wrapper w-[90%] md:w-[60%] lg:w-[25%]">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
              <Title className="text-center" level={3}>
                Iniciar Sesión
              </Title>
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
                  <Input placeholder="ejemplo123" name="user" />
                  <ErrorMessage
                    component="span"
                    className="text-[12px] text-red-500"
                    name="user"
                  />
                </Space>
                <Space
                  direction="vertical"
                  style={{
                    display: "flex",
                  }}
                  size={2}
                >
                  <Title level={5}>Password</Title>
                  <Input
                    placeholder="ejemplo"
                    type="password"
                    name="password"
                  />
                  <ErrorMessage
                    component="span"
                    className="text-[12px] text-red-500"
                    name="password"
                  />
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
                  <ErrorMessage
                    component="span"
                    className="text-[12px] text-red-500"
                    name="type_user"
                  />
                </Space>
              </Space>
              <div className="wrapper-button mt-8">
                <Button
                  size="large"
                  className="w-full"
                  htmlType="submit"
                  type="primary"
                >
                  Aceptar
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
