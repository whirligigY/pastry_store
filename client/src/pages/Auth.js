import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
  const location = useLocation().pathname;
  const isLogin = location === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ flex: '1' }}
    >
      <Card style={{ width: '500px' }} className="p-3">
        <Form>
          <Form.Group className="mb-4">
            <h2>{isLogin ? 'Login' : 'Registration'}</h2>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-between">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Link to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
              <Button variant="link" type="submit">
                {isLogin ? 'Registration' : 'Login'}
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
