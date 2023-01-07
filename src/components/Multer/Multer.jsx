import { useState } from 'react';
import axios from 'axios';

function Multer() {
  const [fileData, setFileData] = useState('');

  function getFile(e) {
    setFileData(e.target.files[0]);
    console.log('File DATA:', fileData);
  }

  function uploadFile(e) {
    e.preventDefault();
    console.log('upload file');
    const data = new FormData();
    console.log('THis is the formdata:', data);
    data.append('file', fileData);
    console.log('FinalData:', data);
    axios({
      method: 'POST',
      url: '/upload',
      data: data,
    }).then((res) => {
      alert(res.data.message);
    });
  }
  return (
    <div>
      <form onSubmit={uploadFile}>
        <label>Upload your picture</label>
        <input type="file" onChange={getFile} required />
        <input type="submit" name="upload" value="Upload"></input>
      </form>
    </div>
  );
}

export default Multer;
