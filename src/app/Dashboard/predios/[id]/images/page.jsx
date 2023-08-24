"use client";
import { Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import AddModal from "./components/AddModal";
import {
  deletePredioImageService,
  getPredioImagesService,
} from "./services/predioImages.services";
import { useParams } from "next/navigation";
import {
  deletePredioImage,
  getPredioImages,
} from "@/store/features/predioImagesSlice";
import { useDispatch, useSelector } from "react-redux";
import ViewImageModal from "./components/VIewImageModal";
import EditModal from "./components/EditModal";

const { Title } = Typography;
const Predio = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const predioImages = useSelector(
    (state) => state.predioImagesReducer.predioImages
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewImageModalOpen, setIsViewImageModalOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [recordSelected, setRecordSelected] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = (record) => {
    console.log(record);
    setIsEditModalOpen(true);
    setRecordSelected(record);
  };
  const handleViewImage = (url) => {
    setIsViewImageModalOpen(true);
    setImage(url);
  };
  const handleRemove = (id) => {
    deletePredioImageService(id).then((res) => {
      dispatch(deletePredioImage(res));
    });
  };
  const columns = [
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: "Descripción",
      dataIndex: "descripcion",
      key: "descripcion",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            <Tooltip placement="top" title="Ver Imagen">
              <EyeOutlined onClick={() => handleViewImage(record.url)} />
            </Tooltip>
            <Tooltip
              onClick={() => showEditModal(record)}
              placement="top"
              title="Editar Predio"
            >
              <EditOutlined />
            </Tooltip>
            <Tooltip placement="top" title="Eliminar Imagen">
              <DeleteOutlined onClick={() => handleRemove(record.id)} />
            </Tooltip>
          </Space>
        </>
      ),
    },
  ];
  useEffect(() => {
    getPredioImagesService(id).then((res) => {
      dispatch(getPredioImages(res));
    });
  }, [dispatch, id]);
  return (
    <>
      <div className="title-wrapper">
        <Title>Imagenes - Plaza de Armas</Title>
        <Button onClick={showModal}>
          Nuevo
          <PlusOutlined />
        </Button>
      </div>
      <Table columns={columns} dataSource={predioImages} rowKey="id" />
      {isModalOpen && (
        <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {isViewImageModalOpen && (
        <ViewImageModal
          isModalOpen={isViewImageModalOpen}
          setIsModalOpen={setIsViewImageModalOpen}
          image={image}
        />
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

export default Predio;
