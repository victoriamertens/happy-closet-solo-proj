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
          <div class="left-header">
            <img class="modal-img" src={logo}></img>
            <h2>Upload Item</h2>
          </div>
          <div class="right-header">
            <button className="close" onClick={props.onClose}>
              X
            </button>
          </div>
        </div>
        <div className="modal-body-upload">
          <UploadImg onClose={() => props.onClose()} />
        </div>
        <div className="modal-footer-upload"></div>
      </div>
    </div>
  );
}

export default ModalDelete;
