import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import EditDetail from '../ClosetItemEdit/ClosetItemEdit.jsx';

function ClosetDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((store) => store.itemDetails);
  const [editBtn, setEditBtn] = useState(false);
  //state of the item details for editing
  const [color, setColor] = useState(store.color);
  const [name, setname] = useState(store.name);
  const [category, setCategory] = useState(store.category);
  const [cost, setCost] = useState(store.cost);

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
    console.log('in UseEffect');
  }, []);

  // useEffect(() => {
  //   dispatch({ type: 'GET_DETAILS', payload: id });
  //   console.log('in UseEffect for edit btn');
  // }, [editBtn]);

  function editItem() {
    console.log('in edit button');
    setEditBtn(!editBtn);
  }

  function deleteItem() {
    console.log('in delete button');
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
        <button onClick={editItem}>Edit</button>
        <button onClick={deleteItem}>DELETE</button>
      </div>
    );
  }
  // if the edit btn is clicked, editable fields will display
  if (editBtn) {
    return (
      <div class="edit-details">
        <EditDetail name={store.name} />
      </div>
    );
  }
}
export default ClosetDetails;
