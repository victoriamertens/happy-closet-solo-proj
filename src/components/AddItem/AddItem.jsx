import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UploadImg from '../UploadImg/UploadImg.jsx';
import ModalUpload from '../ModalUpload/ModalUpload.jsx';

function AddItem() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [cost, setCost] = useState('');
  //const [imageUrl, setImageUrl] = useState('');
  const [show, setShow] = useState(false);

  const uploadImg = useSelector((store) => store.uploadImg);
  //const show = useSelector((store) => store.showModal);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = () => {
    event.preventDefault();
    if (!name || !cost) {
      alert('Your item needs a name, category, and cost!');
    } else if (name && cost) {
      dispatch({
        type: 'CLOSET_ANSWER',
        payload: { name, color, brand, cost, uploadImg },
      });
      history.push('/addItemReview');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label for="name">
          <h2>What is your item's name?</h2>
        </label>
        <input
          id="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <p>
          Get Creative! This can be anything from 'Grandma's Vintage Sweater' to
          'Cassandra'.
        </p>
        <h2>Let's get a few more details</h2>
        <p>*Required Fields</p>
        {/* <div id="selector">
          <label for="category">*Choose a category:</label>
          <select name="category" id="category">
            <option value="">Select a category</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="dress-jumpsuit">Dress/Jumpsuit</option>
            <option value="shoes">Shoes</option>
          </select>
        </div> */}
        <label for="color">*Color:</label>
        <input
          id="color"
          type="text"
          onChange={(event) => setColor(event.target.value)}
        ></input>

        <label for="cost">*Initial Cost of Item:</label>
        <input
          placeholder="Enter a number"
          id="cost"
          type="number"
          onChange={(event) => setCost(event.target.value)}
        ></input>
        <label for="brand">Brand/Maker:</label>
        <input
          id="brand"
          type="text"
          onChange={(event) => setBrand(event.target.value)}
        ></input>
        <h2>Do you have an image to upload?</h2>
        <label for="image">Image URL:</label>
        <input
          id="image"
          type="text"
          onChange={(event) => setImageUrl(event.target.value)}
        ></input>

        <button type="submit">Review Item</button>
      </form>
      <button
        onClick={() => {
          setShow(true);
          console.log(show);
        }}
      >
        Show Modal
      </button>
      {uploadImg === '' ? (
        <ModalUpload show={show} onClose={() => setShow(false)} />
      ) : (
        <img src={uploadImg}></img>
      )}
    </div>
  );
}

export default AddItem;
