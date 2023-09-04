"use client";
import { Breadcrumb, Button, Tooltip, Typography } from "antd";
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
import { useDispatch, useSelector } from "react-redux";
import {
  deleteVendedorService,
  getVendedoresService,
} from "./services/vendedores.services";
import {
  deleteVendedor,
  getVendedores,
} from "@/store/features/vendedoresSlice";
import Link from "next/link";

const { Title } = Typography;
const Vendedores = () => {
  const dispatch = useDispatch();
  const vendedores = useSelector((state) => state.vendedoresReducer.vendedores);
  const [recordSelected, setRecordSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = (record) => {
    setIsEditModalOpen(true);
    setRecordSelected(record);
  };
  const handleDeleteClick = (id) => {
    deleteVendedorService(id).then((res) => dispatch(deleteVendedor(res)));
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
      title: "Fecha Inicio",
      dataIndex: "fecha_inicio",
      key: "fecha_inicio",
      render: (_, record) => record.fecha_inicio.split("T")[0],
    },
    {
      title: "Fecha Fin",
      dataIndex: "fecha_end",
      key: "fecha_end",
      render: (_, record) => record.fecha_end.split("T")[0],
    },
    {
      title: "Predio Asignado",
      dataIndex: "predio_name",
      key: "predio_name",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="top" title="Editar vendedor">
            <EditOutlined onClick={() => showEditModal(record)} />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar vendedor">
            <DeleteOutlined onClick={() => handleDeleteClick(record.id)} />
          </Tooltip>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getVendedoresService().then((res) => dispatch(getVendedores(res)));
  }, [dispatch]);
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <Link href="/Dashboard/vendedores">Predios</Link>,
          },
        ]}
        className="mb-4"
      />
      <div className="title-wrapper">
        <Title level={3}>Vendedores</Title>
        <Button type="primary" onClick={showModal}>
          Nuevo
          <PlusOutlined />
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={vendedores}
        rowKey="id"
        scroll={{ x: 1400, y: 400 }}
      />
      {isModalOpen && (
        <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {isEditModalOpen && (
        <EditModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
          record={recordSelected}
        />
      )}
    </>
  );
};

export default Vendedores;
