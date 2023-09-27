import { Button, Modal, Space, Typography, Upload } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createPredioService } from "../../services/predios.services";
import { addPredio } from "@/store/features/prediosSlice";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import * as yup from "yup";
const { Text, Title } = Typography;
const { TextArea } = Input;
const validationSchema = yup.object().shape({
  name: yup.string().required("Este campo es necesario."),
  description: yup.string().required("Este campo es necesario."),
  lat: yup
    .string()
    .required("Este campo es necesario.")
    .trim()
    .matches(
      "^(\\+|-)?((\\d((\\.)|\\.\\d{1,7})?)|(0*?[0-8]\\d((\\.)|\\.\\d{1,7})?)|(0*?90((\\.)|\\.0{1,7})?))$",
      "Ingrese una latitud correcta."
    ),

  lon: yup
    .string()
    .required("Este campo es necesario.")
    .trim()
    .matches(
      "^(\\+|-)?((\\d((\\.)|\\.\\d{1,7})?)|(0*?\\d\\d((\\.)|\\.\\d{1,7})?)|(0*?1[0-7]\\d((\\.)|\\.\\d{1,6})?)|(0*?180((\\.)|\\.0{1,7})?))$",
      "Ingrese una longitud correcta."
    ),

  video: yup
    .mixed()
    .test("required", "Debes ingresar una video 360º.", (file) => {
      // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
      if (file) return true;
      return false;
    })
    .test("fileSize", "El archivo es muy grande.", (file) => {
      if (file) return file.size <= 100000000;
      return false;
    })
    .test("fileType", "El archivo no es un video 360º.", (file) => {
      if (file) return file.type === "video/mp4";
      return false;
    }),
});

const AddModal = ({ isModalOpen, setIsModalOpen }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChangeUpload = (setFieldValue, info) => {
    console.log(info.file);
    setFieldValue("video", info.file);
  };
  return (
    <Modal
      title={<Title level={4}> Agregar Predio</Title>}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: "",
          video: "",
          description: "",
          lat: "",
          lon: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, video, description, lat, lon }, { resetForm }) => {
          createPredioService(name, video, description, lat, lon, user.id).then(
            (res) => {
              if (res) {
                dispatch(addPredio(res));
                resetForm();
                handleOk();
              }
            }
          );
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
                <Text>Nombre *</Text>
                <Input placeholder="Plaza de armas" name="name" />
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
                <TextArea
                  placeholder="La plaza de armas es un lugar histórico..."
                  name="description"
                />
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
                <Input name="lat" placeholder="-16.3774464" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="lat"
                />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Longitud</Text>
                <Input name="lon" placeholder="-71.5418369" />
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
                <Text>Video 360º</Text>
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
