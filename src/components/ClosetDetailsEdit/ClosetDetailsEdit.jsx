import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import EditDetail from '../ClosetItemEdit/ClosetItemEdit.jsx';

function ClosetDetailsEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((store) => store.itemDetails);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
  }, []);

  function cancelEdit() {
    history.push(`/details/${id}`);
  }

  if (!details) {
    return <p>Preparing the sewing machine to make alterations</p>;
  }
  return (
    <div class="edit-details">
      <EditDetail data={details.name} field="name" id={details.name} />
      <EditDetail
        data={details.image_url}
        field="image_url"
        id={details.image_url}
      />
      <EditDetail data={details.cost} field="cost" id={details.cost} />
      <EditDetail data={details.color} field="color" id={details.color} />
      <EditDetail
        data={details.category}
        field="category"
        id={details.category}
      />
      <button onClick={cancelEdit}>Cancel Edit</button>
    </div>
  );
}

export default ClosetDetailsEdit;
