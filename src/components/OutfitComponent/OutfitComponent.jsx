import './OutfitComponent.css';

import Smile from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Satisfied from '@mui/icons-material/SentimentSatisfied';
import Frown from '@mui/icons-material/SentimentVeryDissatisfied';

function OutfitComponent({ items }) {
  return (
    <div class="outfit-card" key={items.outfitId}>
      <div class="card-top">
        <div class="reaction">
          {items.outfitReaction === 1 && <Smile style={{ color: 'green' }} />}
          {items.outfitReaction === 2 && (
            <Satisfied style={{ color: 'orange' }} />
          )}
          {items.outfitReaction === 3 && <Frown style={{ color: 'red' }} />}
        </div>
        <div className="comment">
          <p>{items.outfitComment}</p>
        </div>
      </div>
      <div class="images">
        {items.urls.map((url) => {
          return <img src={url}></img>;
        })}
      </div>
    </div>
  );
}

export default OutfitComponent;
