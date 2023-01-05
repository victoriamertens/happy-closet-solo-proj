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
    setShow(true);
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
          <ModalSuccess
            onClose={() => {
              setShow(false);
              history.push('/closet');
            }}
            show={show}
            component="item"
          />
        </div>
      </>
    );
  }
}

export default AddItemReview;
