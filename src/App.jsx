import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentURl from './Pages/PaymentURL';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/payment/:amount' element={<PaymentURl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
