import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AddItem() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    event.preventDefault();
    console.log('Submitting item:', name);
    dispatch({
      type: 'CLOSET_ANSWER',
      payload: { data: name, answer: 'name' },
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label for="name">
          <h2>What is your item's Name?</h2>
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
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default AddItem;
