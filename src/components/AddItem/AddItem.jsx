import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//import UploadImg from '../UploadImg/UploadImg.jsx';
import ModalUpload from '../ModalUpload/ModalUpload.jsx';
import ModalSuccess from '../ModalSuccess2/ModalSuccess2.jsx';
import './AddItem.css';

function AddItem() {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const show = useSelector((store) => store.showModal);
  //const [imageUrl, setImageUrl] = useState('');
  const [showUpload, setShowUpload] = useState(false);

  const uploadImg = useSelector((store) => store.uploadImg);
  //const show = useSelector((store) => store.showModal);

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = () => {
    if (!name || !cost || !category) {
      alert('Your item needs a name, category, and cost!');
    } else if (name && cost && category) {
      dispatch({
        type: 'ADD_TO_CLOSET',
        payload: { name, color, brand, cost, category, uploadImg },
      });
    }
  };

  return (
    <div class="add-item">
      <label htmlFor="name">
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
      <h2>Let's get a few more details:</h2>

      <div id="selector">
        <label for="category">Choose a category:</label>
        <select
          onChange={(event) => setCategory(event.target.value)}
          name="category"
          id="category"
        >
          <option value="">Select a category</option>
          <option value="TOPS">Tops</option>
          <option value="BOTTOMS">Bottoms</option>
          <option value="DRESS-JUMPSUIT">Dress/Jumpsuit</option>
          <option value="SHOES">Shoes</option>
        </select>
      </div>
      <label htmlFor="color">Color:</label>
      <input
        class="tesing"
        id="color"
        type="text"
        onChange={(event) => setColor(event.target.value.toUpperCase())}
      ></input>

      <label htmlFor="cost">Initial Cost of Item:</label>
      <input
        placeholder="Enter a number"
        id="cost"
        type="number"
        onChange={(event) => setCost(event.target.value)}
      ></input>
      <label htmlFor="brand">Brand/Maker:</label>
      <input
        id="brand"
        type="text"
        onChange={(event) => setBrand(event.target.value.toUpperCase())}
      ></input>
      <h2>Upload an Item Image:</h2>
      {uploadImg !== '' ? (
        <></>
      ) : (
        <button
          onClick={() => {
            setShowUpload(true);
            console.log(show);
          }}
        >
          Add Photo
        </button>
      )}

      {uploadImg === '' ? (
        <ModalUpload show={showUpload} onClose={() => setShowUpload(false)} />
      ) : (
        <div class="image">
          <img src={uploadImg}></img>
          <button class="review-item" onClick={onSubmit}>
            Add to Closet
          </button>
        </div>
      )}
      <div className="success">
        <ModalSuccess
          onClose={() => {
            dispatch({ type: 'HIDE_MODAL' });
            history.push('/closet');
          }}
          show={show}
          component="item"
        />
      </div>
    </div>
  );
}

export default AddItem;
