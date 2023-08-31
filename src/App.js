import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './home'; 
import Checkout from './checkout'; 
import ThankYou from './thank';
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} /> 
        <Route path='/checkout' element={<Checkout />} /> 
        <Route path='/thank' element={<ThankYou/>}/>
      </Routes>
    </Router>

  );
}

export default App;
