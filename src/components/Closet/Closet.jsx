import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Closet.css';

function Closet() {
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
          console.log('Here it is!', item);
          return (
            <div className="single-item">
              <p>{item.name}</p>
              <img key={item.id} src={item.image_url}></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Closet;
