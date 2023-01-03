import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import EditDetail from '../ClosetItemEdit/ClosetItemEdit.jsx';

function ClosetDetailsEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((store) => store.itemDetails);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
    console.log('in UseEffect');
  }, []);

  function cancelEdit() {
    console.log('in cancel edit');
    history.push(`/details/${id}`);
  }

  if (!store) {
    return <p>Preparing the sewing machine to make alterations</p>;
  }
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
      <EditDetail data={store.category} field="category" id={store.category} />
      <button onClick={cancelEdit}>Cancel Edit</button>
    </div>
  );
}

export default ClosetDetailsEdit;
