import { useHistory } from 'react-router-dom';

function ClosetItem({ item }) {
  console.log('ITEM:', item.name);
  const history = useHistory();

  function navigateDetails() {
    console.log('in Navigate details, id:', item.id);
    history.push(`/details/` + item.id);
  }

  return (
    <div className="single-item" onClick={navigateDetails}>
      <p>{item.name}</p>
      <img key={item.id} src={item.image_url}></img>
    </div>
  );
}

export default ClosetItem;
