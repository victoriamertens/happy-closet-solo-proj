import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './OutfitBuilder.css';

function OutfitBuilder() {
  const outfitItems = useSelector((store) => store.newOutfit);
  const history = useHistory();

  const nextStep = () => {
    history.push('/makeoutfitcomment');
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
