import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OutfitComponent from '../OutfitComponent/OutfitComponent.jsx';

function Outfits() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.outfits);

  useEffect(() => {
    dispatch({ type: 'GET_OUTFITS' });
  }, []);

  return (
    <div>
      <h3>Your Outfits</h3>
      {store.map((item) => {
        return <OutfitComponent items={item} />;
      })}
    </div>
  );
}

export default Outfits;
