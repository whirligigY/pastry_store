import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
