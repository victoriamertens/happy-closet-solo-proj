import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import './UploadImg.css';

function UploadImg(props) {
  const [fileData, setFileData] = useState('');
  const dispatch = useDispatch();

  function setFile(e) {
    setFileData(e.target.files[0]);
  }

  function uploadFile(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('file', fileData);
    dispatch({ type: 'UPLOAD_TO_S3', payload: data });
    props.onClose();
  }
  return (
    <div>
      <form onSubmit={uploadFile}>
        <label>
          <h4>Upload your picture</h4>
        </label>
        <div class="upload">
          <div class="left">
            <input type="file" onChange={setFile} required />
          </div>
          <div class="right">
            <input type="submit" name="upload" value="Upload"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadImg;
