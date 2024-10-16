import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from '../src/toppage/TopPage';
import Task1 from '../src/task1/Task1';
import Task2 from '../src/task2/Task2';
import Task3 from './task3/Task3';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/Task1" element={<Task1 />} />
        <Route path="/Task2" element={<Task2 />} />
        <Route path="/Task3" element={<Task3 />} />
      </Routes>
    </Router>
  );
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;
