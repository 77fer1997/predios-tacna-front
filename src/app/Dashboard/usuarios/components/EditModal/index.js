import { editUser } from "@/store/features/usersSlice";
import { Button, Modal, Space, Typography } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateUserService } from "../../services/users.services";
import * as yup from "yup";
const { Text } = Typography;
const validationSchema = yup.object().shape({
  name: yup.string().required("Este campo es necesario."),
  lastnames: yup.string().required("Este campo es necesario."),
  email: yup.string().required("Este campo es necesario."),
});
const EditModal = ({ isModalOpen, setIsModalOpen, record }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Editar Usuario"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: record?.name,
          lastnames: record?.lastnames,
          email: record?.email,
        }}
        onSubmit={({ name, lastnames, email }) => {
          updateUserService(record.id, name, lastnames, email).then((res) => {
            if (res) {
              dispatch(editUser(res));
              handleOk();
            }
          });
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
                <Text>Nombre *</Text>
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
                <Text>Apellidos *</Text>
                <Input name="lastnames" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="lastnames"
                />
              </Space>

              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Email *</Text>
                <Input name="email" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="email"
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
