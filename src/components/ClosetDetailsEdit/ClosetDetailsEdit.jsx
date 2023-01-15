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
      <div class="edit-container">
        <div class="edit-image">
          <img src={details.image_url}></img>
        </div>
        <div id="editable-fields">
          <EditDetail data={details.name} field="name" id={details.name} />

          <EditDetail data={details.cost} field="cost" id={details.cost} />
          <EditDetail data={details.color} field="color" id={details.color} />
          <EditDetail
            data={details.category_name}
            field="category"
            id={details.category_name}
          />
        </div>
      </div>
      <button id="cancel-edit" onClick={cancelEdit}>
        <h3>Cancel Edit</h3>
      </button>
    </div>
  );
}

export default ClosetDetailsEdit;

{
  /* <EditDetail
  data={details.image_url}
  field="image_url"
  id={details.image_url}
/>; */
}
