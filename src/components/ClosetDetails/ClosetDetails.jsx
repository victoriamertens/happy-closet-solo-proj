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
      <div className="container-details">
        <div className="container-left">
          <h2 class="name">{details.name}</h2>
          <img id="details-img" src={details.image_url}></img>
        </div>
        <div className="container-right">
          <h3>Cost:</h3>
          <h4>- ${details.cost}</h4>
          <h3>Color:</h3>
          <h4>- {details.color}</h4>
          <h3>Category:</h3>
          <h4>- {details.category_name}</h4>
          <h3>Brand: </h3>
          <h4>- {details.brand}</h4>
        </div>
      </div>
      <div class="buttons">
        <button id="edit" onClick={editItem}>
          <h3>Edit</h3>
        </button>
        <button id="delete" onClick={() => setShow(true)}>
          <h3>Remove From Closet</h3>
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
