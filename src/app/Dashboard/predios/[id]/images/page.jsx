"use client";
import { Breadcrumb, Button, Tooltip, Typography } from "antd";
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
import { getPredioService } from "../../services/predios.services";
import Link from "next/link";

const { Title } = Typography;
const Predio = () => {
  const [predio, setPredio] = useState(null);
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
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
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
  useEffect(() => {
    getPredioService(id).then((res) => {
      setPredio(res);
    });
  }, [dispatch, id]);

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Inicio",
          },
          {
            title: <Link href="/Dashboard/predios">Predios</Link>,
          },
          {
            title: predio?.name,
          },
        ]}
        className="mb-4"
      />
      <div className="title-wrapper">
        <Title level={3}>Imagenes - {predio?.name}</Title>
        <Button onClick={showModal} type="primary">
          <PlusOutlined />
          Nuevo imagen
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
