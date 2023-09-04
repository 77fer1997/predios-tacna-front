"use client";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  UserOutlined,
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
  const { logOut, user } = useContext(AuthContext);
  const { id } = useSelector((state) => state.loginReducer);

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
export default DashboardVendedorLayout;
