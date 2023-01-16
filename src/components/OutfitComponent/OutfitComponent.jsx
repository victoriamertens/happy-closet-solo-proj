import './OutfitComponent.css';

import Smile from '@mui/icons-material/SentimentVerySatisfiedOutlined';
import Satisfied from '@mui/icons-material/SentimentSatisfied';
import Frown from '@mui/icons-material/SentimentVeryDissatisfied';

import smile from '../Images/smile-test.jpg';
import okay from '../Images/okay-test.jpg';
import frown from '../Images/frown-test.jpg';

function OutfitComponent({ items }) {
  if (items.outfitReaction === 1) {
    return (
      <div className="outfit-card smile" key={items.outfitId}>
        <div className="card-top">
          <div className="reaction">
            <img src={smile}></img>
          </div>
        </div>
        <div className="comment-container">
          <div className="comment">
            <h3>"{items.outfitComment}"</h3>
          </div>
        </div>
        <div className="images">
          {items.urls.map((url) => {
            return (
              <div class="img-div">
                <img src={url}></img>
              </div>
            );
          })}
        </div>

        <div className="card-bottom"></div>
      </div>
    );
  }
  if (items.outfitReaction === 2) {
    return (
      <div className="outfit-card okay" key={items.outfitId}>
        <div className="card-top">
          <div className="reaction">
            <img src={okay}></img>
          </div>
        </div>
        <div className="comment-container">
          <div className="comment">
            <h3>"{items.outfitComment}"</h3>
          </div>
        </div>
        <div className="images">
          {items.urls.map((url) => {
            return (
              <div class="img-div">
                <img src={url}></img>
              </div>
            );
          })}
        </div>

        <div className="card-bottom"></div>
      </div>
    );
  }
  return (
    <div className="outfit-card frown" key={items.outfitId}>
      <div className="card-top">
        <div className="reaction">
          <img src={frown}></img>
        </div>
      </div>
      <div className="comment-container">
        <div className="comment">
          <h3>"{items.outfitComment}"</h3>
        </div>
      </div>
      <div className="images">
        {items.urls.map((url) => {
          return (
            <div class="img-div">
              <img src={url}></img>
            </div>
          );
        })}
      </div>

      <div className="card-bottom"></div>
    </div>
  );
}

export default OutfitComponent;
