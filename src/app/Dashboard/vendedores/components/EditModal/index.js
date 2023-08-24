import { Button, Modal, Space, Typography, DatePicker, Select } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPrediosService } from "@/app/Dashboard/predios/services/predios.services";
import { updateVendedorService } from "../../services/vendedores.services";
import { editVendedor } from "@/store/features/vendedoresSlice";
import * as yup from "yup";
import dayjs from "dayjs";
const { Text } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const validationSchema = yup.object().shape({
  name: yup.string().required("Este campo es necesario."),
  lastname: yup.string().required("Este campo es necesario."),
  email: yup.string().required("Este campo es necesario."),
  telefono: yup.string().required("Este campo es necesario."),
  fecha_end: yup.string().required("Este campo es necesario."),
  fecha_inicio: yup.string().required("Este campo es necesario."),
  predio_id: yup.string().required("Este campo es necesario."),
});
const EditModal = ({ isModalOpen, setIsModalOpen, record }) => {
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
      title="Editor Vendedor"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          name: record?.name,
          lastname: record?.lastname,
          email: record?.email,
          telefono: record?.telefono,
          fecha_inicio: record?.fecha_inicio.split("T")[0],
          fecha_end: record?.fecha_end.split("T")[0],
          predio_id: record?.predio_id,
          predio_name: record?.predio_name,
        }}
        validationSchema={validationSchema}
        onSubmit={({
          name,
          lastname,
          email,
          telefono,
          fecha_inicio,
          fecha_end,
          predio_id,
          predio_name,
        }) => {
          updateVendedorService(
            record?.id,
            name,
            lastname,
            email,
            telefono,
            fecha_inicio,
            fecha_end,
            predio_id,
            predio_name
          ).then((res) => {
            if (res) {
              dispatch(editVendedor(res));
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
                <Text>Apellidos</Text>
                <Input name="lastname" />
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
                <Text>Teléfono</Text>
                <Input name="telefono" />
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
                  style={{ width: "100%" }}
                  defaultValue={[
                    dayjs(record?.fecha_inicio.split("T")[0], "YYYY-MM-DD"),
                    dayjs(record?.fecha_end.split("T")[0], "YYYY-MM-DD"),
                  ]}
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
                  defaultValue={record?.predio_name}
                  placeholder="Selecciona un predio"
                  style={{ width: "100%" }}
                  onChange={(value, { children }) => {
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
