import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = () => {
  const { brand } = useContext(Context);

  return (
    <Row className="d-flex flex-row mt-4 ms-1">
      {brand.brands.map(({ id, name }) => (
        <Card
          bg={brand.selected === id ? 'light' : 'none'}
          key={id}
          style={{ cursor: 'pointer', width: '8rem', marginRight: '5px' }}
          onClick={() => {
            brand.setSelected(id);
            console.log('id', id, 'brand selected', brand.selected);
          }}
        >
          {name}
        </Card>
      ))}
    </Row>
  );
};

export default observer(BrandBar);
