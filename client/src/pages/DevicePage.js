import { useParams } from 'react-router-dom';

const DevicePage = () => {
  let params = useParams();
  return <div>{`DevicePage ${params.id}`}</div>;
};

export default DevicePage;
