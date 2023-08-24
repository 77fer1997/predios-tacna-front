"use client";
import { Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import {
  deletePredioService,
  getPrediosService,
} from "./services/predios.services";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deletePredio, getPredios } from "@/store/features/prediosSlice";

const { Title } = Typography;

const Predios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const dispatch = useDispatch();
  const predios = useSelector((state) => state.prediosReducer.predios);
  const router = useRouter();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = (record) => {
    setIsEditModalOpen(true);
    setSelectedRecord(record);
  };
  const deleteById = (id) => {
    deletePredioService(id).then(({ id }) => {
      dispatch(deletePredio(id));
    });
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
      responsive: ["md"],
    },
    {
      title: "Latitud",
      dataIndex: "lat",
      key: "lat",
    },
    {
      title: "Longitud",
      dataIndex: "lon",
      key: "lon",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip
            onClick={() => showEditModal(record)}
            placement="top"
            title="Editar Predio"
          >
            <EditOutlined />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar Predio">
            <DeleteOutlined onClick={() => deleteById(record.id)} />
          </Tooltip>
          <Tooltip
            placement="top"
            title="Añadir Imagenes"
            onClick={() =>
              router.push(`/Dashboard/predios/${record.id}/images`)
            }
          >
            <PlusOutlined />
          </Tooltip>
          <Tooltip
            placement="top"
            title="Añadir Video"
            onClick={() =>
              router.push(`/Dashboard/predios/${record.id}/videos`)
            }
          >
            <VideoCameraOutlined />
          </Tooltip>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getPrediosService().then((res) => dispatch(getPredios(res)));
  }, [dispatch]);
  return (
    <>
      <div className="title-wrapper">
        <Title>Predios</Title>
        <Button onClick={showModal}>
          Nuevo
          <PlusOutlined />
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={predios}
        rowKey="id"
        scroll={{ x: 1600, y: 400 }}
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

export default Predios;
