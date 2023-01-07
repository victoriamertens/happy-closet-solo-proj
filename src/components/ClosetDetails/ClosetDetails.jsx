import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import ModalDelete from '../ModalDelete/ModalDelete';

import './ClosetDetails.css';

function ClosetDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const details = useSelector((store) => store.itemDetails);
  const [show, setShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
  }, []);

  function editItem() {
    history.push(`/editdetails/${id}`);
  }

  function removeItem() {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    alert('Your item has been pulled off its hanger!');
    history.push(`/closet`);
  }

  if (!details) {
    return <p>Collecting your item's details</p>;
  }

  return (
    <div class="item-details">
      <p class="name">{details.name}</p>
      <img src={details.image_url}></img>
      <p>Cost: {details.cost}</p>
      <p>Color: {details.color}</p>
      <p>Category: {details.category}</p>
      <div class="buttons">
        <button id="edit" onClick={editItem}>
          Edit
        </button>
        <button id="delete" onClick={() => setShow(true)}>
          Remove From Closet
        </button>
        <ModalDelete
          onClose={() => {
            setShow(false);
          }}
          removeItem={() => removeItem()}
          show={show}
        />
      </div>
    </div>
  );
}

export default ClosetDetails;
