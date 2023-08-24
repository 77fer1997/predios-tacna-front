"use client";
import React, { useContext } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Layout, Menu, theme, Space } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { AuthContext } from "@/context/AuthContext";
const { Header, Sider, Content } = Layout;
const Dashboard = ({ children }) => {
  const { logOut } = useContext(AuthContext);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  return (
    <Layout className="container">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <Image
            src={`/assets/tacna-flag.png`}
            alt=""
            width={80}
            height={100}
          />
        </Space>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key !== "logout") {
              router.push(`/Dashboard/${key}`);
            } else {
              logOut();
              router.push("/login");
            }
          }}
          items={[
            {
              key: "usuarios",
              icon: <UserOutlined />,
              label: "Usuarios",
            },
            {
              key: "predios",
              icon: <VideoCameraOutlined />,
              label: "Predios",
            },
            {
              key: "vendedores",
              icon: <UploadOutlined />,
              label: "Vendedores",
            },
            {
              key: "logout",
              icon: <LogoutOutlined />,
              label: "Salir",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
