import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import './MakeOutfitItem.css';

function MakeOutfitItem({ item }) {
  const dispatch = useDispatch();
  const [inOutfit, setInOutfit] = useState(false);
  const outfits = useSelector((store) => store.newOutfit);

  useEffect(() => {
    console.log('In useEffect');
    setInOutfit(false);
    checkInOutfit();
  }, [outfits]);

  function checkInOutfit() {
    for (let outfitItem of outfits) {
      console.log('outfititem:', outfitItem.id, item.id);
      if (outfitItem.id === item.id) {
        setInOutfit(true);
      }
    }
  }

  const addOutfitToStore = () => {
    console.log('Adding to store:', item.id);
    dispatch({
      type: 'MAKE_OUTFIT',
      payload: { id: item.id, image: item.image_url },
    });
    setClicked(!clicked);
  };
  if (!outfits) {
    return <p>Loading...</p>;
  }
  if (inOutfit) {
    return <></>;
  }
  if (item.in_closet) {
    return (
      <div class="single-item" onClick={addOutfitToStore} key={item.id}>
        <img class="make-outfit" src={item.image_url}></img>
        <p> {item.name}</p>
      </div>
    );
  } else {
    return <></>;
  }
}

export default MakeOutfitItem;
