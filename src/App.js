import { useState } from 'react';
import './App.css';
import Form from './compoonents/Form';
import websites from './models/myapplications';

function App() {

  // let [count, setCount] = useState(0)
  // let [currentProject, setCurrentProject] = useState(websites[count])
  
  // const checkBoxesChecked = () => {
  //   const [checkedBoxes, setCheckedBoxes] = useState([])
  // };

  return (
    <div className="App">
      <h1>My Projects</h1>
      <h2>Feel Free to Filter by the language.</h2>
      <Form languages={websites} />
    </div>
  );
}

export default App;
