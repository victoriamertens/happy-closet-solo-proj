import './ModalUpload.css';
import logo from '../Images/happy_closet_icon.jpg';

import UploadImg from '../UploadImg/UploadImg.jsx';

function ModalDelete(props) {
  console.log('in modal success 2 ');
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal-upload" onClick={props.onClose}>
      {console.log('in modal success 2 ')}
      <div
        className="modal-content-upload"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header-upload">
          <h4>Upload Item</h4>
          <button onClick={props.onClose}>X</button>
        </div>
        <div className="modal-body-upload">
          <img src={logo}></img>
          <UploadImg onClose={() => props.onClose()} />
        </div>
        <div className="modal-footer-upload"></div>
      </div>
    </div>
  );
}

export default ModalDelete;
