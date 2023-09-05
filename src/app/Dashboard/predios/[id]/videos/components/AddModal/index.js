import { Button, Modal, Space, Typography } from "antd";
import { ErrorMessage, Formik } from "formik";
import { Form, Input } from "formik-antd";
import React from "react";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addPredioImage } from "@/store/features/predioImagesSlice";
import { createPredioVideoService } from "../../services/predioVideos.services";
import { addPredioVideo } from "@/store/features/predioVideosSlice";
import * as yup from "yup";
const { Text } = Typography;
const validationSchema = yup.object().shape({
  url: yup.string().required("Este campo es necesario."),
});
const AddModal = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      title="Agregar Video"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Formik
        initialValues={{
          url: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ url }, { resetForm }) => {
          createPredioVideoService(url, id).then((res) => {
            if (res) {
              dispatch(addPredioVideo(res));
              resetForm();
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
                <Text>URL</Text>
                <Input
                  name="url"
                  placeholder="https://www.youtube.com/watch?v=XnqQxGAOdhA"
                />
                <ErrorMessage
                  component="span"
                  className="text-[12px] text-red-500"
                  name="url"
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
