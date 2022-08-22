import { useContext } from 'react';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const NavBar = () => {
  const navigate = useNavigate();
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
            <Button
              variant="light"
              style={{ marginRight: '10px' }}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Admin panel
            </Button>
            <Button
              onClick={() => {
                user.setIsAuth(false);
                navigate(LOGIN_ROUTE);
              }}
            >
              Exit
            </Button>
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
