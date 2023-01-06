import './ModalDelete.css';
import logo from '../Images/happy_closet_icon.jpg';

function ModalDelete(props) {
  console.log('in modal success 2 ');
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      {console.log('in modal success 2 ')}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>Remove Item</h4>
        </div>
        <div className="modal-body">
          <img src={logo}></img>
          <p>Are you sure you want to remove this item from your closet?</p>
          <button>Yes, remove item.</button>
          <button>No! Cancel</button>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
