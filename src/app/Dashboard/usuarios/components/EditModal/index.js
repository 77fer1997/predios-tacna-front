import { editUser } from "@/store/features/usersSlice";
import { Button, Modal, Space, Typography } from "antd";
import { Formik } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateUserService } from "../../services/users.services";
const { Text } = Typography;
const EditModal = ({ isModalOpen, setIsModalOpen, record }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log(record);
  return (
    <Modal
      title="Editar Usuario"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: record?.name,
          lastnames: record?.lastnames,
          email: record?.email,
        }}
        onSubmit={({ name, lastnames, email }) => {
          console.log(record.id, name, lastnames, email);
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
                <Text>Nombre</Text>
                <Input name="name" />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Apellidos</Text>
                <Input name="lastnames" />
              </Space>

              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Email</Text>
                <Input name="email" />
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
