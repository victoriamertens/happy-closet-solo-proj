import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function OutfitBuilder() {
  const outfitItems = useSelector((store) => store.newOutfit);
  const history = useHistory();
  console.log(outfitItems);

  const nextStep = () => {
    history.push('/makeoutfitcomment');
  };

  if (outfitItems.length === 0) {
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
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default OutfitBuilder;
