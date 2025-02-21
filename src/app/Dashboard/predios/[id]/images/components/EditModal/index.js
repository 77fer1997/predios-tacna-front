import { Button, Modal, Space, Typography, Upload } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { updatePredioImageService } from "../../services/predioImages.services";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { editPredioImage } from "@/store/features/predioImagesSlice";
import * as yup from "yup";
const { Text } = Typography;
const { TextArea } = Input;
const validationSchema = yup.object().shape({
  descripcion: yup.string().required("Este campo es necesario."),
  image: yup
    .mixed()
    .test("fileSize", "El archivo es muy grande.", (file) => {
      if (file) return file.size <= 100000000;
      return true;
    })
    .test("fileType", "El archivo no es una imagen.", (file) => {
      if (file) return file.type.includes("image");
      return true;
    }),
});
const EditModal = ({ isModalOpen, setIsModalOpen, record }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeUpload = (setFieldValue, info) => {
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
        validationSchema={validationSchema}
        onSubmit={({ descripcion, image }) => {
          updatePredioImageService(
            descripcion,
            image,
            record?.id,
            record?.url
          ).then((res) => {
            dispatch(editPredioImage(res));
            handleOk();
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
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="iamge"
                />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Descripción</Text>
                <TextArea name="descripcion" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="descripcion"
                />
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
