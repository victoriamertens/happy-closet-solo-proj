import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import './ClosetDetails.css';

function ClosetDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((store) => store.itemDetails);

  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
    console.log('in UseEffect');
  }, []);

  function editItem() {
    console.log('in edit button');
    history.push(`/editdetails/${id}`);
  }

  function deleteItem() {
    console.log('in delete button');
    dispatch({ type: 'DELETE_ITEM', payload: id });
  }

  if (!store) {
    return <p>Collecting your item's details</p>;
  }

  return (
    <div class="item-details">
      <p class="name">{store.name}</p>
      <img src={store.image_url}></img>
      <p>Cost: {store.cost}</p>
      <p>Color: {store.color}</p>
      <p>Category: {store.category}</p>
      <div class="buttons">
        <button id="edit" onClick={editItem}>
          Edit
        </button>
        <button id="delete" onClick={deleteItem}>
          Remove From Closet
        </button>
      </div>
    </div>
  );
}

export default ClosetDetails;
