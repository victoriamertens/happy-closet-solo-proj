import { useState } from 'react';

function ClosetItemEdit(props) {
  console.log(props);
  const [editBtn, setEditBtn] = useState(false);
  const [detail, setDetail] = useState(props.data);

  function editField() {
    console.log('in edit field:', props.field);
    setEditBtn(!editBtn);
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
      <div>
        <label for={props.field}>{props.field}</label>
        <input id={props.field} placeholder={props.data}></input>
        <button>Edit</button>
      </div>
    );
  }
}

export default ClosetItemEdit;
