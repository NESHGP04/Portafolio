import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@styles/App.css'

import Home from '@pages/Home'
import Labs from '@components/Labs';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/my-labs" element={<Labs />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
