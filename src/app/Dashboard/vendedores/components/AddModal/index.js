import { Button, Modal, Space, Typography, Select } from "antd";
import { ErrorMessage, Formik, useField, useFormikContext } from "formik";
import { Form, Input, DatePicker } from "formik-antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPrediosService } from "@/app/Dashboard/predios/services/predios.services";
import { addVendedor } from "@/store/features/vendedoresSlice";
import { createVendedorService } from "../../services/vendedores.services";
import * as yup from "yup";
const { Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const PasswordField = (props) => {
  const {
    values: { name, lastname },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on name and lastname

    if (
      name.trim() !== "" &&
      lastname.trim() !== "" &&
      touched.name &&
      touched.lastname
    ) {
      setFieldValue(
        props.name,
        `${name.toLowerCase().split(" ")[0]}${
          lastname.toLowerCase().split(" ")[0]
        }123456`
      );
    }
  }, [
    lastname,
    name,
    touched.name,
    touched.lastname,
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
    values: { name, lastname },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on name and lastname

    if (
      name.trim() !== "" &&
      lastname.trim() !== "" &&
      touched.name &&
      touched.lastname
    ) {
      setFieldValue(
        props.name,
        `${name.toLowerCase().charAt(0)}.${
          lastname.toLowerCase().split(" ")[0]
        }`
      );
    }
  }, [
    lastname,
    name,
    touched.name,
    touched.lastname,
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
const validationSchema = yup.object().shape({
  name: yup.string().required("Este campo es necesario."),
  lastname: yup.string().required("Este campo es necesario."),
  email: yup.string().required("Este campo es necesario."),
  telefono: yup.string().required("Este campo es necesario."),
  fecha_end: yup.string().required("Este campo es necesario."),
  fecha_inicio: yup.string().required("Este campo es necesario."),
  predio_id: yup.string().required("Este campo es necesario."),
});
const AddModal = ({ isModalOpen, setIsModalOpen }) => {
  const [predios, setPredios] = useState(null);
  const dispatch = useDispatch();
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    getPrediosService().then((res) => setPredios(res));
  }, []);
  return (
    <Modal
      title="Agregar Vendedor"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          telefono: "",
          user: "",
          password: "",
          fecha_inicio: "",
          fecha_end: "",
          predio_name: "",
          predio_id: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(
          {
            name,
            lastname,
            email,
            telefono,
            user,
            password,
            fecha_inicio,
            fecha_end,
            predio_id,
            predio_name,
          },
          { resetForm }
        ) => {
          console.log(predio_id);
          createVendedorService(
            name,
            lastname,
            email,
            telefono,
            user,
            password,
            fecha_inicio,
            fecha_end,
            predio_id,
            predio_name
          ).then((res) => {
            if (res) {
              dispatch(addVendedor(res));
              handleOk();
              resetForm();
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
                <Input placeholder="Jose Manuel" name="name" />
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
                <Text>Apellidos</Text>
                <Input placeholder="Gutierrez Porta" name="lastname" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="lastname"
                />
              </Space>

              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Email</Text>
                <Input placeholder="josemanuel@gmail.com" name="email" />
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
                <Text>Teléfono</Text>
                <Input placeholder="924775484" name="telefono" />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="telefono"
                />
              </Space>
              <Space
                direction="vertical"
                style={{
                  display: "flex",
                }}
              >
                <Text>Subscripción</Text>
                <RangePicker
                  onChange={(date, dateString) => {
                    setFieldValue("fecha_inicio", dateString[0]);
                    setFieldValue("fecha_end", dateString[1]);
                  }}
                  name="fecha"
                  style={{ width: "100%" }}
                />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="fecha_inicio"
                />
              </Space>

              <Space
                direction="vertical"
                style={{
                  display: "flex",
                  width: "100%",
                }}
                size={2}
              >
                <Text level={5}>Predio asignado</Text>
                <Select
                  placeholder="Selecciona un predio"
                  style={{ width: "100%" }}
                  onChange={(value, { children }) => {
                    console.log(value);
                    setFieldValue("predio_name", children);
                    setFieldValue("predio_id", value);
                  }}
                >
                  {predios?.map((predio) => (
                    <Option key={predio.id} value={predio.id}>
                      {predio.name}
                    </Option>
                  ))}
                </Select>
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="predio_id"
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
