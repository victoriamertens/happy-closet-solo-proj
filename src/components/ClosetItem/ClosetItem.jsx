function ClosetItem({ item }) {
  console.log('ITEM:', item.name);
  return (
    <div className="single-item">
      <p>{item.name}</p>
      <img key={item.id} src={item.image_url}></img>
    </div>
  );
}

export default ClosetItem;
