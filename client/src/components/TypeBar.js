import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = () => {
  const { type } = useContext(Context);

  return (
    <div className="mt-4">
      <ListGroup as="ul">
        {type.types.map(({ id, name }) => (
          <ListGroup.Item
            key={id}
            style={{ cursor: 'pointer' }}
            active={id === type.selected}
            onClick={() => type.setSelected(id)}
          >
            {name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default observer(TypeBar);
