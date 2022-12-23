import { useSelector } from 'react-redux';

function OutfitBuilder() {
  const outfitItems = useSelector((store) => store.newOutfit);

  if (!outfitItems) {
    return (
      <div id="outfit-builder">
        <p>Testing empty store</p>
      </div>
    );
  }

  return (
    <div>
      {outfitItems.map((item) => {
        return <img src={item.image}></img>;
      })}
    </div>
  );
}

export default OutfitBuilder;
