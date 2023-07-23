"use client";
import { Button, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import { Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

const data = [
  {
    key: "1",
    name: "Usuario 1",
    lastnames: "Apellido 1",
    email: "usuario.apellido@gmail.com",
  },
  {
    key: "2",
    name: "Usuario 2",
    lastnames: "Apellido 2",
    email: "usuario.apellido@gmail.com",
  },
  {
    key: "3",
    name: "Usuario 3",
    lastnames: "Apellido 3",
    email: "usuario.apellido@gmail.com",
  },
];
const { Title } = Typography;
const Usuarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = () => {
    setIsEditModalOpen(true);
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Apellidos",
      dataIndex: "lastnames",
      key: "lastnames",
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="top" title="Editar Usuario">
            <EditOutlined onClick={showEditModal} />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar Usuario">
            <DeleteOutlined />
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="title-wrapper">
        <Title>Usuarios</Title>
        <Button onClick={showModal}>
          Nuevo
          <PlusOutlined />
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <EditModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
      />
    </>
  );
};

export default Usuarios;
