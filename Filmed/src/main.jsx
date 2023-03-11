import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
import { Layout } from './components/Layout/Layout';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<App />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
