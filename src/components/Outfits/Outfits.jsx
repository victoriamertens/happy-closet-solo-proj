import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Outfits() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  console.log(store.outfits);
  useEffect(() => {
    dispatch({ type: 'GET_OUTFITS' });
  }, []);

  return <p>testing outfits component</p>;
}

export default Outfits;
