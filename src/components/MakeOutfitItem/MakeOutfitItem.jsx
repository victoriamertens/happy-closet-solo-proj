function MakeOutfitItem({ item }) {
  return (
    <div key={item.id}>
      <p>Name: {item.name}</p>
      <img src={item.image_url}></img>
    </div>
  );
}

export default MakeOutfitItem;
