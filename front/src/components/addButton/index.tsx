import React, { useState } from "react";
import { Container, Button, Text } from "./style";
import plusIcon from "../../assets/plusIcon.png";
import Modal from "../modal";
import NewProductForm from "../newProductForm";

interface Props {}

const AddButton: React.FC<Props> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Text>Add new product</Text>
      <Button onClick={openModal}>
        <img src={plusIcon} alt="plusIcon" />
      </Button>
      <Modal
        show={showModal}
        closeModal={closeModal}
        title="Register a new product"
      >
        <NewProductForm></NewProductForm>
      </Modal>
    </Container>
  );
};

export default AddButton;
