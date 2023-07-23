"use client";
import { Button, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import { Space, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

const data = [
  {
    key: "1",
    name: "Luis",
    lastname: "Gutierrez",
    email: "luis@gmail.com",
    telefono: "924775714",
    dni: "76557914",
    user: "luis1234",
    fecha_inicio: "23/09/2023",
    fecha_fin: "23/10/2023",
    predio: "Plaza",
  },
  {
    key: "1",
    name: "Luis",
    lastname: "Gutierrez",
    email: "luis@gmail.com",
    telefono: "924775714",
    dni: "76557914",
    user: "luis1234",
    fecha_inicio: "23/09/2023",
    fecha_fin: "23/10/2023",
    predio: "Plaza",
  },
  {
    key: "1",
    name: "Luis",
    lastname: "Gutierrez",
    email: "luis@gmail.com",
    telefono: "924775714",
    dni: "76557914",
    user: "luis1234",
    fecha_inicio: "23/09/2023",
    fecha_fin: "23/10/2023",
    predio: "Plaza",
  },
];
const { Title } = Typography;
const Vendedores = () => {
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
    },
    {
      title: "Apellidos",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "teléfono",
      dataIndex: "telefono",
      key: "telefono",
    },
    {
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Fecha Inicio",
      dataIndex: "fecha_inicio",
      key: "fecha_inicio",
    },
    {
      title: "Fecha Fin",
      dataIndex: "fecha_fin",
      key: "fecha_fin",
    },
    {
      title: "Predio Asignado",
      dataIndex: "predio",
      key: "predio",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="top" title="Editar vendedor">
            <EditOutlined onClick={showEditModal} />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar vendedor">
            <DeleteOutlined />
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="title-wrapper">
        <Title>Vendedores</Title>
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

export default Vendedores;
