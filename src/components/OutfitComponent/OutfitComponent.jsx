import './OutfitComponent.css';

function OutfitComponent({ items }) {
  console.log(items);
  return (
    <div class="outfit-card" key={items.outfitId}>
      {items.urls.map((url) => {
        return <img src={url}></img>;
      })}
    </div>
  );
}

export default OutfitComponent;
