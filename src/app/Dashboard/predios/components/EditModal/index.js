import { Button, Modal, Space, Typography, Upload } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePredioService } from "../../services/predios.services";
import { UploadOutlined } from "@ant-design/icons";
import { addPredio, editPredio } from "@/store/features/prediosSlice";
import * as yup from "yup";
const { Text } = Typography;
const { TextArea } = Input;
const validationSchema = yup.object().shape({
  name: yup.string().required("Este campo es necesario."),
  description: yup.string().required("Este campo es necesario."),
  lat: yup.string().required("Este campo es necesario."),
  lon: yup.string().required("Este campo es necesario."),
  video: yup
    .mixed()
    .test("fileSize", "El archivo es muy grande.", (file) => {
      if (file) return file.size <= 100000000;
      return true;
    })
    .test("fileType", "El archivo no es un video.", (file) => {
      if (file) return file.type === "video/mp4";
      return true;
    }),
});
const AddModal = ({ isModalOpen, setIsModalOpen, record }) => {
  const handleChangeUpload = (setFieldValue, info) => {
    setFieldValue("video", info.file);
  };
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Editar Predio"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: record?.name,
          description: record?.description,
          video: "",
          lat: record?.lat,
          lon: record?.lon,
        }}
        onSubmit={({ name, video, description, lat, lon }, { resetForm }) => {
          updatePredioService(
            record?.id,
            name,
            video,
            record?.url360,
            description,
            lat,
            lon
          ).then((res) => {
            if (res) {
              dispatch(editPredio(res));
              resetForm();
              handleOk();
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
                <Text>Nombre</Text>
                <Input name="name" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="name"
                />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Descripción</Text>
                <TextArea name="description" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="description"
                />
              </Space>

              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Latitud</Text>
                <Input name="lat" />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Longitud</Text>
                <Input name="lon" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="lon"
                />
              </Space>
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
                  name="video"
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

export default AddModal;
