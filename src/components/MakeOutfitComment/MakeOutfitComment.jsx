import { useState } from 'react';
import { useDispatch } from 'react-redux';

function MakeOutfitComment() {
  const [reaction, setReaction] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  function smileReaction() {
    setReaction(1);
  }
  function lineReaction() {
    setReaction(2);
  }
  function frownReaction() {
    setReaction(3);
  }

  function setToStore() {
    console.log('Comment:', comment, 'Reaction:', reaction);
    dispatch({ type: 'MAKE_OUTFIT_COMMENT', payload: { comment, reaction } });
  }

  return (
    <div>
      <p>*Reaction: </p>
      <button class="reaction" onClick={smileReaction}>
        :)
      </button>
      <button class="reaction" onClick={lineReaction}>
        :/
      </button>
      <button class="reaction" onClick={frownReaction}>
        :(
      </button>
      <textarea
        id="comment"
        name="comment"
        rows="4"
        cols="50"
        placeholder="How was your experience wearing this outfit? Is it comfortable? Did it
        help you feel confident? Does it need to be altered?"
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button onClick={setToStore}>Next</button>
    </div>
  );
}

export default MakeOutfitComment;
