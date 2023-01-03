import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MakeOutfitItem from '../MakeOutfitItem/MakeOutfitItem.jsx';
import OutfitBuilder from '../OutfitBuilder/OutfitBuilder.jsx';

function MakeOutfit() {
  const dispatch = useDispatch();
  const closet = useSelector((store) => store.closet);

  useEffect(() => {
    dispatch({ type: 'GET_CLOSET' });
  }, []);
  if (!closet) {
    return <p>Opening closet doors...</p>;
  }
  if (closet) {
    return (
      <>
        <div className="closet-items">
          {closet.map((item) => {
            return <MakeOutfitItem key={item.id} item={item} />;
          })}
        </div>
        <OutfitBuilder />
      </>
    );
  }
}

export default MakeOutfit;
