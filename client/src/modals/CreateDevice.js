import { Modal, Button, Form } from 'react-bootstrap';

const CreateDevice = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Device modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control type="text" placeholder="Enter device.." />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Device
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
