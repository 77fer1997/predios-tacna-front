"use client";
import { Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import { getPredios } from "./services/predios.services";
import { useRouter } from "next/navigation";

const data = [
  {
    key: "1",
    name: "Predio 1",
    descripcion: "Este descripción es de prueba.",
    latitud: "12312312321",
    longitud: "151212151515",
  },
  {
    key: "2",
    name: "Predio 2",
    descripcion: "Este descripción es de prueba.",
    age: 42,
    latitud: "London No. 1 Lake Park",
    longitud: "151212151515",
  },
  {
    key: "3",
    name: "Predio 3",
    descripcion: "Este descripción es de prueba.",
    age: 32,
    latitud: "1232132132",
    longitud: "151212151515",
  },
];
const { Title } = Typography;
const Predios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const router = useRouter();
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
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Descripción",
      dataIndex: "descripcion",
      key: "descripcion",
    },
    {
      title: "Latitud",
      dataIndex: "latitud",
      key: "latitud",
    },
    {
      title: "Longitud",
      dataIndex: "longitud",
      key: "Longitud",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="top" title="Ver ubicación">
            <EyeOutlined />
          </Tooltip>
          <Tooltip
            onClick={showEditModal}
            placement="top"
            title="Editar Predio"
          >
            <EditOutlined />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar Predio">
            <DeleteOutlined />
          </Tooltip>
          <Tooltip
            placement="top"
            title="Añadir Imagenes"
            onClick={() => router.push("/Dashboard/predios/1")}
          >
            <PlusOutlined />
          </Tooltip>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getPredios().then((res) => console.log(res));
  });
  return (
    <>
      <div className="title-wrapper">
        <Title>Predios</Title>
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

export default Predios;
