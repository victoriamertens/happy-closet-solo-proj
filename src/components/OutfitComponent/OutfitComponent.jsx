import './OutfitComponent.css';

function OutfitComponent({ items }) {
  return (
    <div class="outfit-card" key={items.outfitId}>
      <div class="images">
        {items.urls.map((url) => {
          return <img src={url}></img>;
        })}
      </div>
      <p>{items.outfitComment}</p>
      <div class="reaction">
        {items.outfitReaction === 1 && <p>:)</p>}
        {items.outfitReaction === 2 && <p>:/</p>}
        {items.outfitReaction === 3 && <p>:(</p>}
      </div>
    </div>
  );
}

export default OutfitComponent;
