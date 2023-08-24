import { Button, Modal, Space, Typography } from "antd";
import { ErrorMessage, Formik, useField, useFormikContext } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import { createUserService } from "../../services/users.services";
import { addUser } from "@/store/features/usersSlice";
import { useDispatch } from "react-redux";
import * as yup from "yup";
const { Text } = Typography;
const validationSchema = yup.object().shape({
  name: yup.string().required("Este campo es necesario."),
  lastnames: yup.string().required("Este campo es necesario."),
  email: yup.string().required("Este campo es necesario."),
});
const PasswordField = (props) => {
  const {
    values: { name, lastnames },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on name and lastnames
    if (
      name.trim() !== "" &&
      lastnames.trim() !== "" &&
      touched.name &&
      touched.lastnames
    ) {
      setFieldValue(
        props.name,
        `${name.toLowerCase().split(" ")[0]}${
          lastnames.toLowerCase().split(" ")[0]
        }123456`
      );
    }
  }, [
    lastnames,
    name,
    touched.name,
    touched.lastnames,
    setFieldValue,
    props.name,
  ]);

  return (
    <>
      <Input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
const UserField = (props) => {
  const {
    values: { name, lastnames },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on name and lastnames

    if (
      name.trim() !== "" &&
      lastnames.trim() !== "" &&
      touched.name &&
      touched.lastnames
    ) {
      setFieldValue(
        props.name,
        `${name.toLowerCase().charAt(0)}.${
          lastnames.toLowerCase().split(" ")[0]
        }`
      );
    }
  }, [
    lastnames,
    name,
    touched.name,
    touched.lastnames,
    setFieldValue,
    props.name,
  ]);

  return (
    <>
      <Input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};
const AddModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Agregar Usuario"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: "",
          lastnames: "",
          email: "",
          user: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ name, lastnames, email, user, password }) => {
          createUserService({ name, lastnames, email, user, password }).then(
            (res) => {
              console.log(res);
              dispatch(addUser(res));
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
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Usuario</Text>
                <UserField name="user" disabled />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Password</Text>

                <PasswordField disabled name="password" />
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
