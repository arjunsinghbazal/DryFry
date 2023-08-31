import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './home'; 
import Checkout from './checkout'; 
import ThankYou from './thank';
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} /> 
        <Route path='/check' Component={Checkout} /> 
        <Route path='/thank' Component={ThankYou}/>
      </Routes>
    </Router>

  );
}

export default App;
