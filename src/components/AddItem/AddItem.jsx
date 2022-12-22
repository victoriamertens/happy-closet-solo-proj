import { useState } from 'react';

function AddItem() {
  const onSubmit = () => {
    event.preventDefault();
    console.log('Submitting item');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label for="name">
          <h2>What is your item's Name?</h2>
        </label>
        <input id="name" type="text"></input>
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
