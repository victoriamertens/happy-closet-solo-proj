import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MakeOutfitItem from '../MakeOutfitItem/MakeOutfitItem.jsx';

function MakeOutfit() {
  const dispatch = useDispatch();
  const closet = useSelector((store) => store.closet);
  console.log('The store:', closet);

  useEffect(() => {
    dispatch({ type: 'GET_CLOSET' });
  }, []);
  if (!closet) {
    return <p>Opening closet doors...</p>;
  }
  if (closet) {
    console.log('in closet conditional');
    console.log(closet);
    return (
      <div className="closet-items">
        {closet.map((item) => {
          return <MakeOutfitItem key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default MakeOutfit;
