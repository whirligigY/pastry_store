import { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="primary" variant="light">
      <Container>
        <Link
          to={SHOP_ROUTE}
          style={{ color: 'white', textDecoration: 'none' }}
        >
          OnLine-Store
        </Link>

        {user.isAuth ? (
          <Nav className="justify-content-end">
            <Button variant="light" style={{ marginRight: '10px' }}>
              Admin panel
            </Button>
            <Button onClick={() => user.setIsAuth(false)}>Exit</Button>
          </Nav>
        ) : (
          <Nav className="justify-content-end">
            <Button variant="light" onClick={() => user.setIsAuth(true)}>
              Auth
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default observer(NavBar);
