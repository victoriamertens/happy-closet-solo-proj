import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ClosetDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
    console.log('in UseEffect');
  }, []);

  return <p>Testing Closet Details: {id}</p>;
}
export default ClosetDetails;
