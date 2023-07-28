import { Button, Modal, Space, Typography, Upload } from "antd";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { updatePredioImageService } from "../../services/predioImages.services";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { editPredioImage } from "@/store/features/predioImagesSlice";
const { Text } = Typography;
const { TextArea } = Input;
const EditModal = ({ isModalOpen, setIsModalOpen, record }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeUpload = (setFieldValue, info) => {
    console.log(info.file);
    setFieldValue("image", info.file);
  };
  return (
    <Modal
      title="Editar Imagen"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          image: "",
          descripcion: record?.descripcion,
        }}
        onSubmit={({ descripcion, image }) => {
          console.log(id);
          updatePredioImageService(
            descripcion,
            image,
            record?.id,
            record?.url
          ).then((res) => dispatch(editPredioImage(res)));
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <Space
              direction="vertical"
              style={{
                display: "flex",
              }}
            >
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Imagen</Text>
                <Upload
                  maxCount={1}
                  onChange={(info) => handleChangeUpload(setFieldValue, info)}
                  beforeUpload={() => false}
                >
                  <Button icon={<UploadOutlined />}>Subir Archivos</Button>
                </Upload>
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Descripción</Text>
                <TextArea name="descripcion" />
              </Space>

              <Space style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button type="primary" htmlType="submit" key="1">
                  Aceptar
                </Button>
              </Space>
            </Space>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default EditModal;
