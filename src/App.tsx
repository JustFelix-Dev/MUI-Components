import './App.css';
import MuiAccordion from './components/MuiAccordion';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import MuiButton from './components/MuiButton';
import MuiCard from './components/MuiCard';
import { MuiCheckbox } from './components/MuiCheckbox';
import MuiImageList from './components/MuiImageList';
import MuiLayout from './components/MuiLayout';
import MuiLink from './components/MuiLink';
import MuiNavbar from './components/MuiNavbar';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextField } from './components/MuiTextField';
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
    </div>
  );
}

export default App;
