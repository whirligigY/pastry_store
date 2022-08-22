import { Modal, Button, Form } from 'react-bootstrap';

const CrateType = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Type modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control type="text" placeholder="Enter type.." />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CrateType;
