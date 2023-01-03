import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CheckroomIcon from '@mui/icons-material/Checkroom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';

import './FooterNav.css';

function FooterNav() {
  const history = useHistory();
  const user = useSelector((store) => store.user);

  function toCloset() {
    history.push('/closet');
  }
  function toAddItem() {
    history.push('/additem');
  }
  function toMakeOutfit() {
    history.push('/makeoutfit');
  }
  function toOutfits() {
    history.push('/outfits');
  }

  return (
    <>
      {/* If no user is logged in, show nothing */}
      {!user.id && <div></div>}
      {user.id && (
        <div class="footer-nav">
          <div class="icon-container">
            <CheckroomIcon
              onClick={toCloset}
              style={{ color: 'white' }}
              className="nav-icon"
            />

            <p onClick={toCloset}>Closet</p>
          </div>
          <div class="icon-container">
            <AddBoxIcon
              onClick={toAddItem}
              style={{ color: 'white' }}
              className="nav-icon"
            />
            <p onClick={toAddItem}>Add Item</p>
          </div>
          <div class="icon-container">
            <CreateOutlinedIcon
              onClick={toMakeOutfit}
              style={{ color: 'white' }}
              className="nav-icon"
            />
            <p onClick={toMakeOutfit}>Make Outfit</p>
          </div>
          <div class="icon-container">
            <ViewListOutlinedIcon
              onClick={toOutfits}
              style={{ color: 'white' }}
              className="nav-icon"
            />
            <p onClick={toOutfits}>Outfits</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FooterNav;
