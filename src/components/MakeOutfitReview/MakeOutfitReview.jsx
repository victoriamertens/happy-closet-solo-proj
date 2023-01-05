import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import ModalSuccess from '../ModalSuccess2/ModalSuccess2.jsx';

function MakeOutfitReview() {
  const items = useSelector((store) => store.newOutfit);
  const comments = useSelector((store) => store.outfitComment);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  function postOutfit() {
    dispatch({ type: 'POST_OUTFIT', payload: [...items, comments] });
    setShow(true);
  }

  if (!items || !comments) {
    return 'Putting your outfit together';
  } else {
    return (
      <div>
        <div id="outfit-items">
          {items.map((item) => {
            return <img src={item.image}></img>;
          })}
        </div>
        <div id="outfit-comments">
          {comments.reaction === 1 && <p>Reaction: :)</p>}
          {comments.reaction === 2 && <p>Reaction: :/</p>}
          {comments.reaction === 3 && <p>Reaction: :(</p>}
          <p>Comments: {comments.comment}</p>
        </div>
        <button onClick={postOutfit}> Add to Outfit Log</button>
        <div className="success">
          <ModalSuccess
            onClose={() => {
              setShow(false);
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
