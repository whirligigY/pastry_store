import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device, brand }) => {
  const navigate = useNavigate();
  return (
    <Col md={3}>
      <Card
        style={{
          width: 150,
          cursor: 'pointer',
          border: 'none',
          marginBottom: '20px',
        }}
        onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
      >
        <Image
          width={150}
          height={150}
          src={device.img}
          style={{
            borderTopRightRadius: '0.375rem',
            borderTopLeftRadius: '0.375rem',
          }}
        />
        <div
          className="d-flex flex-column p-1"
          style={{
            borderBottomRightRadius: '0.375rem',
            borderBottomLeftRadius: '0.375rem',
            border: '1px solid rgba(0, 0, 0, 0.175)',
          }}
        >
          <div className="d-flex justify-content-between">
            <div>{brand}</div>
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
              </span>
              <span>{device.raiting}</span>
            </div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
