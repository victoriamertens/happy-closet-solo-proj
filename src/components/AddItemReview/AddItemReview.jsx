import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function AddItemReview() {
  const item = useSelector((store) => store.newClothes);
  console.log('Review:', item);
  const dispatch = useDispatch();

  const addToCloset = () => {
    dispatch({ type: 'ADD_TO_CLOSET', payload: item });
  };
  if (!item) {
    return 'Stitching your item together';
  } else {
    return (
      <div>
        <div id="item-details">
          <p>Name: {item.name}</p>
          <p>Category: NEED TO UPDATE</p>
          <p>Color: {item.color}</p>
          <p>Initial Cost: {item.cost}</p>
          <p>Brand: {item.brand}</p>
        </div>
        <div id="item-image">
          <img src={item.imageUrl}></img>
        </div>
        <button onClick={addToCloset}> Add to Closet</button>
      </div>
    );
  }
}

export default AddItemReview;
