import { useHistory } from 'react-router-dom';

import './ClosetItem.css';

function ClosetItem({ item }) {
  const history = useHistory();

  function navigateDetails() {
    history.push(`/details/` + item.id);
  }
  if (item.in_closet) {
    return (
      <div className="single-item" onClick={navigateDetails}>
        <p>{item.name}</p>
        <img key={item.id} src={item.image_url}></img>
      </div>
    );
  } else {
    return <></>;
  }
}

export default ClosetItem;
