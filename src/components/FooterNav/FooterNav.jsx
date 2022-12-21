import { useHistory } from 'react-router-dom';

import CheckroomIcon from '@mui/icons-material/Checkroom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

import './FooterNav.css';
console.log(CheckroomIcon);

function FooterNav() {
  const history = useHistory();

  function toCloset() {
    console.log('To closet');
    history.push('closet');
  }
  function toAddItem() {
    console.log('To addItem');
    history.push('/additem');
  }
  function toMakeOutfit() {
    console.log('To Make outfit');
    history.push('makeoutfit');
  }
  function toOutfits() {
    console.log('To outfits');
    history.push('/outfits');
  }

  return (
    <div class="footer-nav">
      <div>
        <CheckroomIcon onClick={toCloset} style={{ color: 'white' }} />

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
