import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Closet() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log('The store:', store);

  useEffect(() => {
    dispatch({ type: 'GET_CLOSET' });
  }, []);

  return <p>Testing Closet component</p>;
}

export default Closet;
