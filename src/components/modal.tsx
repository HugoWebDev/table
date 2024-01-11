import React from "react";
import { Input, Modal } from "antd";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      title="Edit User"
      visible={visible}
      onOk={onClose}
      onCancel={onClose}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*Name: </p>
          <Input style={{ margin: "5px" }} placeholder="Name" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*Username: </p>
          <Input style={{ margin: "5px" }} placeholder="Username" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*Email: </p>
          <Input style={{ margin: "5px" }} placeholder="Email" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*City: </p>
          <Input style={{ margin: "5px" }} placeholder="City" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*Zipcode: </p>
          <Input style={{ margin: "5px" }} placeholder="Zip Code" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*Website: </p>
          <Input style={{ margin: "5px" }} placeholder="Website" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p>*Company: </p>
          <Input style={{ margin: "5px" }} placeholder="Company" />
        </div>
      </div>
    </Modal>
  );
};

export default ModalComponent;
