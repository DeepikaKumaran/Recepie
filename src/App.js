import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Description } from './pages/Description';
import Details from './component/Details';



function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />

          {/* <Route path='/details' element={<Details />}></Route> */}

        </Routes>
      </Router>

    </div>
  );
}

export default App;
