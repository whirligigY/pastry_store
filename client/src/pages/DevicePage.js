import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
// import { useContext } from 'react';
// import { Context } from '..';

const DevicePage = () => {
  let params = useParams();
  const device = {
    id: 6,
    name: 'gtr-5558',
    price: 45500,
    raiting: 0,
    img: 'https://cdn5.vectorstock.com/i/1000x1000/99/64/business-card-template-for-dairy-shop-vector-19279964.jpg',
    typeId: 2,
    brandId: 4,
  };
  const info = [
    {
      id: 1,
      title: 'Title for Info',
      description: 'Lorem Ipsum is simply dummy text of the printing ...',
      deviceId: 6,
    },
    {
      id: 2,
      title: 'Title for Info 2',
      description: 'Lorem Ipsum is simply dummy text of the printing ...',
      deviceId: 6,
    },
  ];
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={device.img}
            style={{ borderRadius: '0.375rem' }}
          />
        </Col>
        <Col
          md={4}
          className="d-flex justufy-content-center align-items-center"
        >
          <div className="d-flex flex-column">
            <div>
              <p style={{ fontSize: '20px' }}>Model: {device.name}</p>
            </div>
            <div>
              <p>Rating: {device.raiting}</p>
            </div>
            <div>Info: </div>
          </div>
        </Col>
        <Col md={4}>
          <Card
            style={{ width: '300px', height: '300px', padding: '20px' }}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <h3 className="mb-5">{device.price} ₽</h3>
            <Button variant="secondary" style={{ width: '100%' }}>
              Add to cart
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <h3 className="mb-4">Features: </h3>
        {info.map((el) => (
          <div key={`info-${el.id}`} className="d-flex align-items-center mb-2">
            <span style={{ fontWeight: 'bold', paddingRight: '10px' }}>
              {el.title}:
            </span>
            <span>{el.description}</span>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;

//{`DevicePage ${params.id}`}
