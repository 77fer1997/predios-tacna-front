import { Button, Modal, Space, Typography, Upload } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React, { useContext } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { createProductoService } from "../../services/productos.services";
import { addProducto } from "@/store/features/productosSlice";
import * as yup from "yup";
import { AuthContext } from "@/context/AuthContext";
const { Text } = Typography;
const { TextArea } = Input;
const validationSchema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  price: yup
    .number()
    .typeError("El precio debe ser un número")
    .required("ERROR: The number is required!")
    .test(
      "Is positive?",
      "El número debe ser mayor que cero",
      (value) => value > 0
    ),
  descripcion: yup.string().required("Campo requerido"),
  image: yup
    .mixed()
    .test("required", "Debes ingresar una imagen.", (file) => {
      if (file) return true;
      return false;
    })
    .test("fileSize", "El archivo es muy grande.", (file) => {
      if (file) return file.size <= 100000000;
      return false;
    })
    .test("fileType", "El archivo no es una imagen.", (file) => {
      if (file) return file.type.includes("image");
    }),
});
const AddModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.loginReducer.id);
  const { user } = useContext(AuthContext);
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
      title="Agregar Producto"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: "",
          price: "",
          image: "",
          descripcion: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, price, descripcion, image }, { resetForm }) => {
          createProductoService(name, descripcion, price, user.id, image).then(
            (res) => {
              dispatch(addProducto(res));
              resetForm();
              handleOk();
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
                <Text>Nombre</Text>
                <Input placeholder="Polo XL" name="name" />
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
                  placeholder="Polo de lana importado de USA"
                  name="descripcion"
                />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="descripcion"
                />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Precio</Text>
                <Input placeholder="120.00" name="price" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="price"
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
                  name="image"
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
