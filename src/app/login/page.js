"use client";
import { ErrorMessage, Formik } from "formik";
import { Form, Input, InputNumber, Checkbox } from "formik-antd";
import React from "react";
import "./style.css";
import { Divider, Space, Typography, Select } from "antd";
import { Button } from "@/components/Button";
import { PT_Serif } from "next/font/google";
import Link from "next/link";
const { Title } = Typography;
const { Option } = Select;
const Login = () => {
  return (
    <div className="login-content">
      <div className="login-wrapper">
        <Formik initialValues={{}} onSubmit={() => {}}>
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
                  <Input type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
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
                  >
                    <Option value="1">Administrador</Option>
                    <Option value="2">Vendedor</Option>
                  </Select>
                </Space>
              </Space>
              <div className="wrapper-button">
                <Link href="/Dashboard/predios">
                  <Button type="submit">Aceptar</Button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
