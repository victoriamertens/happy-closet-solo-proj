import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './OutfitBuilder.css';

function OutfitBuilder() {
  const outfitItems = useSelector((store) => store.newOutfit);
  const history = useHistory();
  const dispatch = useDispatch();

  const nextStep = () => {
    history.push('/makeoutfitcomment');
  };

  const removeItem = (e) => {
    let id = e.currentTarget.id;
    dispatch({ type: 'REMOVE_ITEM_FROM_OUTFIT', payload: id });
  };

  if (outfitItems.length === 0) {
    return (
      <div class="outfit-builder">
        <p>Testing empty store</p>
      </div>
    );
  }

  return (
    <div class="outfit-builder">
      <div id="builder-images">
        {outfitItems.map((item) => {
          return (
            <div class="img-card">
              <img src={item.image}></img>
              <button id={item.id} onClick={removeItem} class="x-button">
                X
              </button>
            </div>
          );
        })}
      </div>
      <div id="builder-button">
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default OutfitBuilder;
