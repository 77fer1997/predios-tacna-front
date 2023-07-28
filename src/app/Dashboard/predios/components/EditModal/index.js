import { Button, Modal, Space, Typography } from "antd";
import { Formik } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePredioService } from "../../services/predios.services";
import { addPredio, editPredio } from "@/store/features/prediosSlice";
const { Text } = Typography;
const { TextArea } = Input;
const AddModal = ({ isModalOpen, setIsModalOpen, record }) => {
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
        initialValues={{
          name: record?.name,
          description: record?.description,
          lat: record?.lat,
          lon: record?.lon,
        }}
        onSubmit={({ name, description, lat, lon }, { resetForm }) => {
          updatePredioService(record?.id, name, description, lat, lon).then(
            (res) => {
              if (res) {
                dispatch(editPredio(res));
                resetForm();
                handleOk();
              }
            }
          );
        }}
      >
        {() => (
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
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Descripción</Text>
                <TextArea name="description" />
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
