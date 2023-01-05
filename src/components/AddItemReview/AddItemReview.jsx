import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import ModalSuccess from '../ModalSuccess2/ModalSuccess2.jsx';

function AddItemReview() {
  const item = useSelector((store) => store.newClothes);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCloset = () => {
    dispatch({ type: 'ADD_TO_CLOSET', payload: item });
    alert('Your item has been added to your closet!');
    history.push('/closet');
  };
  if (!item) {
    return 'Stitching your item together';
  } else {
    return (
      <>
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
        <div className="success">
          <button onClick={() => setShow(true)}>Show Modal</button>
          <ModalSuccess onClose={() => setShow(false)} show={show} />
        </div>
      </>
    );
  }
}

export default AddItemReview;
