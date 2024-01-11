import './App.css';
import MuiButton from './components/MuiButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiRadioButton } from './components/MuiRadioButton';
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
    </div>
  );
}

export default App;
