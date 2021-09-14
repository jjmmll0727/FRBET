import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { render } from '@testing-library/react';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  useEffect(() => {
    axiosTest();
  })

  const axiosTest = () => {
    axios.get('http://localhost:3010/post/showAll')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

  return <p>showAll</p>
  
}


export default App;
