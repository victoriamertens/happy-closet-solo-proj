import './ModalSuccess2.css';
import logo from '../Images/happy_closet_icon.jpg';

function ModalSuccess2(props) {
  console.log('in modal success 2 ');
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      {console.log('in modal success 2 ')}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Success</h2>
        </div>
        <div className="modal-body">
          <img src={logo}></img>
          {props.component === 'item' ? (
            <h3>Your item is now on a hanger in your closet!</h3>
          ) : (
            <h3>Your outfit is saved!</h3>
          )}
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccess2;
