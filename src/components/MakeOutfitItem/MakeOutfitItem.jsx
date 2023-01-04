import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

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
  return (
    <div onClick={addOutfitToStore} key={item.id}>
      <p>Name: {item.name}</p>
      <img src={item.image_url}></img>
      {console.log('outfit:', inOutfit)}
    </div>
  );
}

export default MakeOutfitItem;
