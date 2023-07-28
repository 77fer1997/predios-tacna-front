import { Button, Modal, Space, Typography, Upload } from "antd";
import { Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { createPredioImageService } from "../../services/predioImages.services";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addPredioImage } from "@/store/features/predioImagesSlice";
const { Text } = Typography;
const { TextArea } = Input;
const AddModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

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
      title="Agregar Imagen"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          image: "",
          descripcion: "",
        }}
        onSubmit={({ descripcion, image }, { resetForm }) => {
          createPredioImageService(descripcion, id, image).then((res) => {
            if (res) {
              dispatch(addPredioImage(res));
              resetForm();
              setIsModalOpen(false);
            }
          });
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

export default AddModal;
