import { Container, Button } from 'react-bootstrap';
import { useState } from 'react';
import CreateType from '../modals/CreateType';
import CreateBrand from '../modals/CreateBrand';
import CreateDevice from '../modals/CreateDevice';

const Admin = () => {
  const [show, setShow] = useState({
    typeModal: false,
    brandModal: false,
    deviceModal: false,
  });

  const handleShow = (key) => {
    setShow({ ...show, [key]: true });
  };
  const handleClose = (key) => {
    setShow({ ...show, [key]: false });
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <Button
        variant="outline-secondary"
        className="mb-4"
        style={{ width: '250px' }}
        onClick={() => handleShow('typeModal')}
      >
        Add type
      </Button>
      <CreateType
        show={show.typeModal}
        handleClose={() => handleClose('typeModal')}
      />
      <Button
        variant="outline-secondary"
        className="mb-4"
        style={{ width: '250px' }}
        onClick={() => handleShow('brandModal')}
      >
        Add brand
      </Button>
      <CreateBrand
        show={show.brandModal}
        handleClose={() => handleClose('brandModal')}
      />

      <Button
        variant="outline-secondary"
        className="mb-4"
        style={{ width: '250px' }}
        onClick={() => handleShow('deviceModal')}
      >
        Add device
      </Button>
      <CreateDevice
        show={show.deviceModal}
        handleClose={() => handleClose('deviceModal')}
      />
    </Container>
  );
};

export default Admin;
