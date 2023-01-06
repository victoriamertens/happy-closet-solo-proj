import './ModalDelete.css';
import logo from '../Images/happy_closet_icon.jpg';

function ModalDelete(props) {
  console.log('in modal success 2 ');
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-remove" onClick={props.onClose}>
      {console.log('in modal success 2 ')}
      <div
        className="modal-content-remove"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-remove">
          <h4>Remove Item</h4>
        </div>
        <div className="modal-body-remove">
          <img src={logo}></img>
          <h3>Are you sure you want to remove this item from your closet?</h3>
          <button onClick={props.removeItem}>Yes, remove item.</button>
          <button onClick={props.onClose}>No! Cancel</button>
        </div>
        <div className="modal-footer-remove">
          <p>
            *This will remove your item from your closet, but it will still be
            viewable in your outftis"
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
