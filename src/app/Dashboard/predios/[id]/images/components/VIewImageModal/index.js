import React from "react";
import { Modal } from "antd";
import Image from "next/image";
const ViewImageModal = ({ isModalOpen, setIsModalOpen, image }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Image"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <Image
          className="img-100"
          src={image}
          alt=""
          width={1920}
          height={1080}
        />
      </Modal>
    </>
  );
};
export default ViewImageModal;
