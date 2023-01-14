import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OutfitComponent from '../OutfitComponent/OutfitComponent.jsx';
import './Outfits.css';

import Smile from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Okay from '@mui/icons-material/SentimentSatisfied';
import Frown from '@mui/icons-material/SentimentVeryDissatisfied';

import smile from '../Images/smile-test.jpg';
import okay from '../Images/okay-test.jpg';
import frown from '../Images/frown-test.jpg';

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
      <div id="outfit-header">
        <h1>Your Outfits</h1>
        <div class="filter">
          <p>Fitler By:</p>
          <button id="smile" onClick={filterBySmile}>
            <img src={smile}></img>
          </button>
          <button id="okay" onClick={filterByOkay}>
            <img src={okay}></img>
          </button>
          <button id="frown" onClick={filterByFrown}>
            <img src={frown}></img>
          </button>
          <button id="none" onClick={filterByNone}>
            No Filter
          </button>
        </div>
      </div>
      {store.map((item) => {
        return <OutfitComponent items={item} />;
      })}
    </div>
  );
}

export default Outfits;
