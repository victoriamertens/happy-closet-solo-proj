import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

function UploadImg() {
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
    // axios({
    //   method: 'POST',
    //   url: '/upload',
    //   data: data,
    // }).then((res) => {
    //   console.log('Returned:', res.data);
    // });
  }
  return (
    <div>
      <form onSubmit={uploadFile}>
        <label>Upload your picture</label>
        <input type="file" onChange={setFile} required />
        <input type="submit" name="upload" value="Upload"></input>
      </form>
    </div>
  );
}

export default UploadImg;
