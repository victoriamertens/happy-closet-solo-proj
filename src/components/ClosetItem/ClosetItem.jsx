import { useHistory } from 'react-router-dom';

function ClosetItem({ item }) {
  console.log('ITEM In Closet:', item.in_closet);
  const history = useHistory();

  function navigateDetails() {
    console.log('in Navigate details, id:', item.id);
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
