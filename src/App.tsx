import './App.css';
import MuiButton from './components/MuiButton';
import { MuiRadioButton } from './components/MuiRadioButton';
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
    </div>
  );
}

export default App;
