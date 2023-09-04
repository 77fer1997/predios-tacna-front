"use client";
import React, { useContext } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./style.css";
import { Layout, Menu, theme } from "antd";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { AuthContext } from "@/context/AuthContext";
const { Header, Sider, Content } = Layout;
const Dashboard = ({ children }) => {
  const { logOut, user } = useContext(AuthContext);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  console.log(user);
  return (
    <Layout>
      <Header className="flex justify-between items-center">
        <Image
          src={`/assets/tacna-flag.png`}
          className="w-[30px] h-auto"
          alt=""
          width={400}
          height={400}
        />
        <div className="flex items-center">
          <UserOutlined className="text-white mr-2" />
          <div className="flex flex-col gap-2">
            <p className="text-white leading-3 font-light">{user?.name}</p>
            <p className="text-white leading-3 font-semibold">
              {user?.type_user}
            </p>
          </div>
        </div>
      </Header>
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
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            className="bg-white"
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
    </Layout>
  );
};
export default Dashboard;
