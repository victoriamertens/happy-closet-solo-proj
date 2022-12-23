import { useDispatch } from 'react-redux';

function MakeOutfitItem({ item }) {
  const dispatch = useDispatch();

  const addOutfitToStore = () => {
    console.log('Adding to store:', item.id);
    dispatch({ type: 'MAKE_OUTFIT', payload: item.id });
  };

  return (
    <div onClick={addOutfitToStore} key={item.id}>
      <p>Name: {item.name}</p>
      <img src={item.image_url}></img>
    </div>
  );
}

export default MakeOutfitItem;
