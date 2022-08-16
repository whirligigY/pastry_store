import NavBar from '../components/NavBar';
import '../global.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="d-flex">{children}</main>
    </>
  );
};

export default Layout;
