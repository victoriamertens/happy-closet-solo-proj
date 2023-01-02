import { useParams } from 'react-router-dom';

function ClosetDetails() {
  const { id } = useParams();

  return <p>Testing Closet Details: {id}</p>;
}
export default ClosetDetails;
