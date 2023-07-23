"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Layout, Menu, Button, theme, Space } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";
const { Header, Sider, Content } = Layout;
const Dashboard = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  return (
    <Layout className="container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Space
          style={{ display: "flex", justifyContent: "center", padding: "1rem" }}
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
            router.push(`/Dashboard/${key}`);
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
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
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
