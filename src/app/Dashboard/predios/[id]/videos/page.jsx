"use client";
import { Button, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";
import {
    DeleteOutlined,
    PlusOutlined,

} from "@ant-design/icons";
import AddModal from "./components/AddModal";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { deletePredioVideoService, getPredioVideosService } from "./services/predioVideos.services";
import { deletePredioVideo, getPredioVideos } from "@/store/features/predioVideosSlice";

const { Title } = Typography;
const Predio = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const predioVideos = useSelector(state => state.predioVideosReducer.predioVideos)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleRemove = (id) => {
        deletePredioVideoService(id).then((res) => dispatch(deletePredioVideo(res)))
    }
    const columns = [
        {
            title: "URL",
            dataIndex: "url",
            key: "url",
            render: (text) => <a href={text}>{text}</a>
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
            dispatch(getPredioVideos(res))
        })
    }, [dispatch, id])
    return (
        <>
            <div className="title-wrapper">
                <Title>Videos - Plaza de Armas</Title>
                <Button onClick={showModal}>
                    Nuevo
                    <PlusOutlined />
                </Button>
            </div>
            <Table columns={columns} dataSource={predioVideos} rowKey="id" />
            {isModalOpen && <AddModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
        </>
    );
};

export default Predio;
