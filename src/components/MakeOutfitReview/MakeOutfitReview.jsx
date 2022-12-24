import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MakeOutfitReview() {
  const items = useSelector((store) => store.newOutfit);
  const comments = useSelector((store) => store.outfitComment);
  const dispatch = useDispatch();
  const history = useHistory();

  function postOutfit() {
    dispatch({ type: 'POST_OUTFIT', payload: [...items, comments] });
    history.push('/closet');
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
      </div>
    );
  }
}

export default MakeOutfitReview;

const addToCloset = () => {
  dispatch({ type: 'ADD_TO_CLOSET', payload: item });
  alert('Your item has been added to your closet!');
  history.push('/outfits');
};
