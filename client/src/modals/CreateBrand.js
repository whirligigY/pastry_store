import { Modal, Button, Form } from 'react-bootstrap';

const CreateBrand = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Brand modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control type="text" placeholder="Enter brand.." />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Brand
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
