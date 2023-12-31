"use client";
import { Breadcrumb, Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductoService,
  getProductosService,
} from "./services/productos.services";
import { deleteProducto, getProductos } from "@/store/features/productosSlice";
import Link from "next/link";
import Image from "next/image";

const { Title } = Typography;

const Productos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.productosReducer.productos);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = (record) => {
    setIsEditModalOpen(true);
    setSelectedRecord(record);
  };
  const deleteById = (id) => {
    deleteProductoService(id).then((res) => dispatch(deleteProducto(res)));
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "imagen",
      key: "imagen",
      render: (_, record) => (
        <a target="_blank" href={record?.imagen}>
          {
            <Image
              className="w-[40px] h-auto"
              src={record?.imagen}
              alt={record?.description}
              width={600}
              height={600}
            />
          }
        </a>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip
            onClick={() => showEditModal(record)}
            placement="top"
            title="Editar Producto"
          >
            <EditOutlined />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar producto">
            <DeleteOutlined onClick={() => deleteById(record.id)} />
          </Tooltip>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getProductosService().then((res) => dispatch(getProductos(res)));
  }, [dispatch]);
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link href="/dashboarvendedor/productos">Inicio</Link>,
          },
          {
            title: "Predios",
          },
        ]}
        className="mb-4"
      />
      <div className="title-wrapper">
        <Title level={3}>Productos</Title>
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          Nuevo producto
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={productos}
        rowKey="id"
        scroll={{ x: 1400, y: 600 }}
      />
      <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {isEditModalOpen && (
        <EditModal
          isModalOpen={isEditModalOpen}
          setIsModalOpen={setIsEditModalOpen}
          record={selectedRecord}
        />
      )}
    </>
  );
};

export default Productos;
