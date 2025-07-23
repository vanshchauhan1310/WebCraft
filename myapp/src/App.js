import './App.css';
import Bun from './compoenents/bun'
import Cheese from './compoenents/cheese'; 
import Stuffing from './compoenents/patty'
import Student from './compoenents/student';
import LightSwitch from './compoenents/lightswitch';
import Counter from './compoenents/counter';

function App() {
  return (
  <>

  
  <Bun/>
  <Cheese/>
  <Stuffing/>
  <Bun/>

  <Student name = "Rahul" grade = "A"/>

  <LightSwitch/>

  <Counter/>



  </>

  );
}

export default App;
