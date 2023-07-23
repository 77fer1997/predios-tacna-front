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
const Predio = () => {
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
            title: "URL",
            dataIndex: "name",
            key: "name",
            render: (text) => text
        },
        {
            title: "Nombre",
            dataIndex: "descripcion",
            key: "descripcion",
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
                </Space>
            ),
        },
    ];
    return (
        <>
            <div className="title-wrapper">
                <Title>Imagenes - Plaza de Armas</Title>
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

export default Predio;
