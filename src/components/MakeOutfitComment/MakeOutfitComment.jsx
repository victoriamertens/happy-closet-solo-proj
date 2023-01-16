import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import smile from '../Images/smile-test.jpg';
import okay from '../Images/okay-test.jpg';
import frown from '../Images/frown-test.jpg';

import './MakeOutfitComment.css';

function MakeOutfitComment() {
  const [reaction, setReaction] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  function smileReaction(element) {
    setReaction(1);
    document.getElementById('smile-reaction').classList.add('checked');
    document.getElementById('okay-reaction').classList.remove('checked');
    document.getElementById('frown-reaction').classList.remove('checked');
  }
  function lineReaction() {
    setReaction(2);
    document.getElementById('smile-reaction').classList.remove('checked');
    document.getElementById('okay-reaction').classList.add('checked');
    document.getElementById('frown-reaction').classList.remove('checked');
  }
  function frownReaction() {
    setReaction(3);
    document.getElementById('smile-reaction').classList.remove('checked');
    document.getElementById('okay-reaction').classList.remove('checked');
    document.getElementById('frown-reaction').classList.add('checked');
  }

  function setToStore() {
    if (reaction === 0 || comment === '') {
      alert("Don't forget to add a comment and a reaction!");
    } else {
      dispatch({ type: 'MAKE_OUTFIT_COMMENT', payload: { comment, reaction } });
      history.push('/makeoutfitreview');
    }
  }

  return (
    <div class="reaction-container">
      <h2>What do you think of this outfit? </h2>
      <div className="reaction-buttons">
        <div>
          <h4>Select your reaction:</h4>
        </div>
        <div>
          <button
            class="reaction-btn"
            id="smile-reaction"
            onClick={smileReaction}
          >
            <img src={smile}></img>
          </button>
          <button
            class="reaction-btn"
            id="okay-reaction"
            onClick={lineReaction}
          >
            <img src={okay}></img>
          </button>
          <button
            class="reaction-btn"
            id="frown-reaction"
            onClick={frownReaction}
          >
            <img src={frown}></img>
          </button>
        </div>
      </div>
      <h2>Write your thoughts here: </h2>
      <div className="text-area-container">
        <textarea
          id="comment"
          name="comment"
          rows="10"
          cols="50"
          placeholder="How was your experience wearing this outfit? Is it comfortable? Did it
        help you feel confident? Does it need to be altered?"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <button onClick={setToStore}>Next</button>
      </div>
    </div>
  );
}

export default MakeOutfitComment;
