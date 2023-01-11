import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OutfitComponent from '../OutfitComponent/OutfitComponent.jsx';

function Outfits() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.outfits);

  useEffect(() => {
    dispatch({ type: 'GET_OUTFITS' });
  }, []);

  function filterBySmile() {
    console.log('smile');
    dispatch({ type: 'GET_REACTION', payload: 'smiles' });
  }
  function filterByOkay() {
    console.log('okay');
    dispatch({ type: 'GET_REACTION', payload: 'okays' });
  }
  function filterByFrown() {
    console.log('frown');
    dispatch({ type: 'GET_REACTION', payload: 'frowns' });
  }

  function filterByNone() {
    console.log('none');
    dispatch({ type: 'GET_OUTFITS' });
  }

  return (
    <div>
      <h3>Your Outfits</h3>
      <p>Fitler By:</p>
      <button onClick={filterBySmile}>Smile</button>
      <button onClick={filterByOkay}>Okay</button>
      <button onClick={filterByFrown}>Frown</button>
      <button onClick={filterByNone}>No Filter</button>
      {store.map((item) => {
        return <OutfitComponent items={item} />;
      })}
    </div>
  );
}

export default Outfits;
