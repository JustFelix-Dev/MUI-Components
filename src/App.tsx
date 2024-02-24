import './App.css';
import MuiAccordion from './components/MuiAccordion';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiBottomNavigation from './components/MuiBottomNavigation';
import MuiBreadcrumbs from './components/MuiBreadcrumbs';
import MuiButton from './components/MuiButton';
import MuiCard from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckbox';
import MuiChip from './components/MuiChip';
import MuiDrawer from './components/MuiDrawer';
import MuiImageList from './components/MuiImageList';
import MuiLayout from './components/MuiLayout';
import MuiLink from './components/MuiLink';
import MuiList from './components/MuiList';
import MuiNavbar from './components/MuiNavbar';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import MuiSpeedDial from './components/MuiSpeedDial';
import { MuiSwitch } from './components/MuiSwitch';
import MuiTable from './components/MuiTable';
import { MuiTextField } from './components/MuiTextField';
import MuiToolTip from './components/MuiToolTip';
import MuiTypography from './components/MuiTypography';
import { Select } from './components/Select';

function App() {
  return (
    <div className="App">
      <MuiTypography/>
      <MuiButton/>
      <MuiTextField/>
      <Select/>
      <MuiRadioButton/>
      <MuiCheckbox/>
      <MuiSwitch/>
      <MuiRating/>
      <MuiAutoComplete/>
      <MuiLayout/>
      <MuiCard/>
      <MuiAccordion/>
      <MuiImageList/>
      <hr />
      <MuiNavbar/>
      <MuiLink/>
      <MuiBreadcrumbs/>
      <MuiDrawer/>
      <MuiSpeedDial/>
      {/* <MuiBottomNavigation/> */}
      <MuiAvatar/>
      <MuiBadge/>
      <MuiList/>
      <MuiChip/>
      <MuiToolTip/>
      <MuiTable/>
    </div>
  );
}

export default App;
