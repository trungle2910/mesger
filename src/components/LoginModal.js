import React from "react";
import { Modal } from "react-bootstrap";

const LoginModal = ({ content, show, handleClose }) => {
  return (
    <div>
      <Modal centered className="text-center" show={show} onHide={handleClose}>
        <Modal.Body>{content}</Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div className="modal-ok" onClick={handleClose}>
            OK
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginModal;
