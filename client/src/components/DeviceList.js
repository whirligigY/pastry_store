import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '..';
import DeviceItem from './DeviceItem';

const DeviceList = () => {
  const { device, brand } = useContext(Context);
  return (
    <Row className="d-flex flex-row mt-4">
      {device.devices.map((el) => (
        <DeviceItem
          key={`key-${el.id}`}
          device={el}
          brand={brand.brands.find((item) => item.id === el.brandId).name}
        />
      ))}
    </Row>
  );
};

export default DeviceList;
