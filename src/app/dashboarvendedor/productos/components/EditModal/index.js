import { Button, Modal, Space, Typography, Upload } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { updateProductoService } from "../../services/productos.services";
import { editProducto } from "@/store/features/productosSlice";
import * as yup from "yup";
const { Text } = Typography;
const { TextArea } = Input;
const validationSchema = yup.object().shape({
  name: yup.string().required("Campo requerido"),
  price: yup
    .number()
    .typeError("El precio debe ser un número")
    .required("Campo requerido.")
    .test(
      "Is positive?",
      "El número debe ser mayor que cero",
      (value) => value > 0
    ),
  descripcion: yup.string().required("Campo requerido"),
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
      title="Editar producto"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: record?.name,
          price: record?.price,
          image: "",
          descripcion: record?.description,
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, price, descripcion, image }) => {
          updateProductoService(
            record?.id,
            name,
            descripcion,
            price,
            record?.imagen,
            image
          ).then((res) => {
            dispatch(editProducto(res));
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
                <TextArea name="descripcion" />
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
                <Input name="price" />
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

export default EditModal;
