import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './components/App/App'
import LandingPage from './components/LandingPage/LandingPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path=":board" element={<App />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
