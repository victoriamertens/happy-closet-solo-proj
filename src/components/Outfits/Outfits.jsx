import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Outfits() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.outfits);

  useEffect(() => {
    dispatch({ type: 'GET_OUTFITS' });
  }, []);

  return (
    <div>
      {store.map((item) => {
        return JSON.stringify(item);
      })}
    </div>
  );
}

export default Outfits;
