import { useHistory } from 'react-router-dom';

function FooterNav() {
  const history = useHistory();

  function toCloset() {
    console.log('To closet');
  }
  function toAddItem() {
    console.log('To addItem');
  }
  function toMakeOutfit() {
    console.log('To Make outfit');
  }
  function toOutfits() {
    console.log('To outfits');
  }

  return (
    <div>
      <div>
        <p onClick={toCloset}>Closet</p>
      </div>
      <div>
        <p onClick={toAddItem}>Add Item</p>
      </div>
      <div>
        <p onClick={toMakeOutfit}>Make Outfit</p>
      </div>
      <div>
        <p onClick={toOutfits}>Outfits</p>
      </div>
    </div>
  );
}

export default FooterNav;
