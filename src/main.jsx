import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './components/App/App'
import LandingPage from './components/LandingPage/LandingPage';
import Add from './components/Add/Add';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path=":board" element={<App />} />
            <Route path=":board/add" element={<Add />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
