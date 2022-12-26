import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Outfits() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_OUTFITS' });
  }, []);

  return <p>testing outfits component</p>;
}

export default Outfits;
