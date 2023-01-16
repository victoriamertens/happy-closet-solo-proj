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
    return <></>;
  }

  return (
    <div class="outfit-builder">
      <div id="builder-images">
        {outfitItems.map((item) => {
          return (
            <div class="img-card">
              <div className="button-container">
                <button id={item.id} onClick={removeItem} class="x-button">
                  x
                </button>
              </div>
              <img src={item.image}></img>
            </div>
          );
        })}
        <div className="next-btn-container">
          <button id="next-btn" onClick={nextStep}>
            Next Step
          </button>
        </div>
      </div>
      <div id="builder-button">
        <div></div>
      </div>
    </div>
  );
}

export default OutfitBuilder;
