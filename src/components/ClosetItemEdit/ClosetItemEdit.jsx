import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import './ClosetItemEdit.css';

function ClosetItemEdit(props) {
  const [editBtn, setEditBtn] = useState(false);
  const [detail, setDetail] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  function editField() {
    setEditBtn(!editBtn);
  }

  function handleChange(event) {
    setDetail(event.target.value);
  }

  function updateField() {
    if (detail === '') {
      alert('Oops! Looks like your text field is empty');
    } else {
      dispatch({
        type: 'UPDATE_FIELD',
        payload: { field: props.field, data: detail, id: id },
      });
      history.push(`/closet`);
    }
  }

  if (!editBtn && props.field === 'image_url') {
    return (
      <div class="edit-field">
        <img src={props.data}></img>
        <button onClick={editField}>Edit</button>
      </div>
    );
  }

  if (!editBtn) {
    return (
      <div class="edit-field">
        <p>
          {props.field} : {props.data}
        </p>
        <button onClick={editField}>Edit</button>
      </div>
    );
  }

  if (editBtn) {
    return (
      <div class="edit-field">
        <label for={props.field}>{props.field}</label>
        <input
          id={props.field}
          placeholder={props.data}
          onChange={handleChange}
        ></input>
        <button onClick={updateField}>Update</button>
      </div>
    );
  }
}

export default ClosetItemEdit;
