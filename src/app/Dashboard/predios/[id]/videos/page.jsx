"use client";
import { Breadcrumb, Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import AddModal from "./components/AddModal";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePredioVideoService,
  getPredioVideosService,
} from "./services/predioVideos.services";
import {
  deletePredioVideo,
  getPredioVideos,
} from "@/store/features/predioVideosSlice";
import { getPredioService } from "../../services/predios.services";
import Link from "next/link";

const { Title } = Typography;
const Predio = () => {
  const [predio, setPredio] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const predioVideos = useSelector(
    (state) => state.predioVideosReducer.predioVideos
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleRemove = (id) => {
    deletePredioVideoService(id).then((res) =>
      dispatch(deletePredioVideo(res))
    );
  };
  const columns = [
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text) => <a href={text}>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Space size="middle">
            <Tooltip placement="top" title="Eliminar Imagen">
              <DeleteOutlined onClick={() => handleRemove(record.id)} />
            </Tooltip>
          </Space>
        </>
      ),
    },
  ];
  useEffect(() => {
    getPredioVideosService(id).then((res) => {
      dispatch(getPredioVideos(res));
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
            title: "Home",
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
        <Title level={3}>Videos - {predio?.name}</Title>
        <Button onClick={showModal} type="primary">
          <PlusOutlined />
          Nuevo
        </Button>
      </div>
      <Table columns={columns} dataSource={predioVideos} rowKey="id" />
      {isModalOpen && (
        <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Predio;
