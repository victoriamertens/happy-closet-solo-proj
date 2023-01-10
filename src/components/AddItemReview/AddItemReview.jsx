import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ModalSuccess from '../ModalSuccess2/ModalSuccess2.jsx';

function AddItemReview() {
  const item = useSelector((store) => store.newClothes);
  const show = useSelector((store) => store.showModal);
  const imageUrl = useSelector((store) => store.uploadImg);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!item.name && !show) {
      history.push('/additem');
    }
  }, [item]);

  const addToCloset = () => {
    dispatch({ type: 'ADD_TO_CLOSET', payload: item });
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
            <img src={imageUrl}></img>
          </div>

          <button onClick={addToCloset}> Add to Closet</button>
        </div>
        <div className="success">
          <ModalSuccess
            onClose={() => {
              dispatch({ type: 'HIDE_MODAL' });
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
