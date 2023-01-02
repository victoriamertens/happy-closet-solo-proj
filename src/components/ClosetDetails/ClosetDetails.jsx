import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function ClosetDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const store = useSelector((store) => store.itemDetails);
  console.log(store);

  useEffect(() => {
    dispatch({ type: 'GET_DETAILS', payload: id });
    console.log('in UseEffect');
  }, []);
  if (!store) {
    return <p>Collecting your item's details</p>;
  }
  return (
    <div class="item-details">
      <p class="name">{store.name}</p>
      <img src={store.image_url}></img>
      <p>Cost: {store.cost}</p>
      <p>Color: {store.color}</p>
      <p>Category: {store.category}</p>
    </div>
  );
}
export default ClosetDetails;
