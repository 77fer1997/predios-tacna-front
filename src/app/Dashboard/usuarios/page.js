"use client";
import { Breadcrumb, Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import { deleteUserService, getUsersService } from "./services/users.services";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "@/store/features/usersSlice";
import Link from "next/link";

const { Title } = Typography;
const Usuarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.usuarios);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showEditModal = (record) => {
    setIsEditModalOpen(true);
    setSelectedRow(record);
  };
  const deleteById = (id) => {
    console.log(id);
    deleteUserService(id).then(({ id }) => {
      dispatch(deleteUser(id));
    });
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
      width: "20%",
    },
    {
      title: "Apellidos",
      dataIndex: "lastnames",
      key: "lastnames",
      width: "20%",
    },
    {
      title: "Correo",
      dataIndex: "email",
      key: "email",
      width: "20%",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip placement="top" title="Editar Usuario">
            <EditOutlined onClick={() => showEditModal(record)} />
          </Tooltip>
          <Tooltip placement="top" title="Eliminar Usuario">
            <DeleteOutlined onClick={() => deleteById(record.id)} />
          </Tooltip>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    getUsersService().then((res) => dispatch(getUsers(res)));
  }, [dispatch]);
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Inicio",
          },
          {
            title: <Link href="/Dashboard/usuarios">Predios</Link>,
          },
        ]}
        className="mb-4"
      />
      <div className="title-wrapper">
        <Title level={3}>Usuarios</Title>
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          Nuevo
        </Button>
      </div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={users}
        scroll={{ x: 1400, y: 400 }}
      />
      <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <EditModal
        isModalOpen={isEditModalOpen}
        setIsModalOpen={setIsEditModalOpen}
        record={selectedRow}
      />
    </>
  );
};

export default Usuarios;
