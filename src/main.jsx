import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './pages/home/App.jsx'
import Pokemon from './pages/pokemon/index.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App} />
        <Route path='/pokemon' Component={Pokemon} />
        <Route path='*' />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
