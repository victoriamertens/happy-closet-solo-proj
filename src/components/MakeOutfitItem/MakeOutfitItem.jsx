import { useDispatch } from 'react-redux';
import { useState } from 'react';

function MakeOutfitItem({ item }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const addOutfitToStore = () => {
    console.log('Adding to store:', item.id);
    dispatch({
      type: 'MAKE_OUTFIT',
      payload: { id: item.id, image: item.image_url },
    });
    setClicked(!clicked);
  };
  if (clicked) {
    return <></>;
  }
  return (
    <div onClick={addOutfitToStore} key={item.id}>
      <p>Name: {item.name}</p>
      <img src={item.image_url}></img>
    </div>
  );
}

export default MakeOutfitItem;
