import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import EditDetail from '../ClosetItemEdit/ClosetItemEdit.jsx';
import './ClosetDetails.css';

function ClosetDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((store) => store.itemDetails);
  const [editBtn, setEditBtn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
    console.log('in UseEffect');
  }, []);

  function editItem() {
    console.log('in edit button');
    setEditBtn(!editBtn);
    history.push(`/editdetails/${id}`);
  }

  function deleteItem() {
    console.log('in delete button');
    dispatch({ type: 'DELETE_ITEM', payload: id });
  }

  function cancelEdit() {
    console.log('in cancel edit');
    setEditBtn(!editBtn);
  }

  if (!store) {
    return <p>Collecting your item's details</p>;
  }
  //if the edit button hasn't been clicked, just display the details page
  if (!editBtn) {
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
  // if the edit btn is clicked, editable fields will display
  if (editBtn) {
    return (
      <div class="edit-details">
        <EditDetail data={store.name} field="name" id={store.name} />
        <EditDetail
          data={store.image_url}
          field="image_url"
          id={store.image_url}
        />
        <EditDetail data={store.cost} field="cost" id={store.cost} />
        <EditDetail data={store.color} field="color" id={store.color} />
        <EditDetail
          data={store.category}
          field="category"
          id={store.category}
        />
        <button onClick={cancelEdit}>Cancel Edit</button>
      </div>
    );
  }
}
export default ClosetDetails;
