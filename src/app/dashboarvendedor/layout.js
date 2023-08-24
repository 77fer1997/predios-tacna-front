"use client";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Layout, Menu, Button, theme, Space } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
const { Header, Sider, Content } = Layout;
const DashboardVendedorLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const { logOut } = useContext(AuthContext);
  const { id } = useSelector((state) => state.loginReducer);

  return (
    <Layout className="container">
      <Sider breakpoint="lg" collapsedWidth="0">
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
              router.push(`/dashboarvendedor/${key}`);
            } else {
              logOut();
              router.push("/login");
            }
          }}
          items={[
            {
              key: "productos",
              icon: <ShoppingOutlined />,
              label: "Productos",
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
export default DashboardVendedorLayout;
