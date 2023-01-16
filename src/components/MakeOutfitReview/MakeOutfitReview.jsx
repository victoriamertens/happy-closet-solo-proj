import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ModalSuccess from '../ModalSuccess2/ModalSuccess2.jsx';
import './MakeOutfitReview.css';

import smile from '../Images/smile-test.jpg';
import okay from '../Images/okay-test.jpg';
import frown from '../Images/frown-test.jpg';

function MakeOutfitReview() {
  const items = useSelector((store) => store.newOutfit);
  const comments = useSelector((store) => store.outfitComment);
  const outfit = useSelector((store) => store.newOutfit[0]);
  const show = useSelector((store) => store.showModal);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!outfit && !show) {
      history.push('/makeoutfit');
    }
  }, [outfit]);

  function postOutfit() {
    dispatch({ type: 'POST_OUTFIT', payload: [...items, comments] });
  }

  if (!items || !comments) {
    return 'Putting your outfit together';
  } else {
    return (
      <div id="review-outfit-container">
        <h1 className="header">Your Outfit</h1>
        <div id="outfit-items">
          {items.map((item) => {
            return (
              <div className="item-images">
                <img src={item.image}></img>
              </div>
            );
          })}
        </div>
        <div className="review-card-bottom">
          <div id="outfit-comments">
            {comments.reaction === 1 && (
              <div className="reaction-comment">
                <h3>Reaction: </h3>
                <img src={smile}></img>
              </div>
            )}
            {comments.reaction === 2 && (
              <div className="reaction-comment">
                <h3>Reaction: </h3>
                <img src={okay}></img>
              </div>
            )}
            {comments.reaction === 3 && (
              <div className="reaction-comment">
                <h3>Reaction: </h3>
                <img src={frown}></img>
              </div>
            )}
          </div>

          <div className="review-comment-container">
            <h3>Comments:</h3>
            <p> "{comments.comment}"</p>
          </div>
        </div>
        <button className="review-btn" onClick={postOutfit}>
          <h2>Add to Outfit Log</h2>
        </button>
        <div className="success">
          <ModalSuccess
            onClose={() => {
              dispatch({ type: 'HIDE_MODAL' });
              history.push('/outfits');
            }}
            show={show}
            component="outfit"
          />
        </div>
      </div>
    );
  }
}

export default MakeOutfitReview;
