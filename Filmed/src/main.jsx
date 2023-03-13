import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App'
import { Layout } from './components/Layout/Layout';
import { Login } from "./pages/LoginPage/Login"
import { Register } from "./pages/RegisterPage/Register"
import { SearchPage } from "./pages/SearchPage/SearchPage"
import { DetailsPage } from "./pages/DetailsPage/DetailsPage"
import { DETAIL_URL, HOME_URL, LOGIN_URL, REGISTER_URL, SEARCH_URL, UPCOMING_URL } from './constants/urls';
import './index.css'
import UpcomingPage from './pages/UpcomingPage/UpcomingPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_URL} element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }/>
          <Route path={LOGIN_URL} element={<Login />}/>
          <Route path={REGISTER_URL} element={<Register />}/>
          <Route path={UPCOMING_URL} element={
            <PrivateRoute>
              <UpcomingPage />
            </PrivateRoute>
          }/>
          <Route path={SEARCH_URL} element={
            <PrivateRoute>
              <SearchPage />
            </PrivateRoute>
          }/>
          <Route path="/movies/:movieId" element={
            <PrivateRoute>
              <DetailsPage />
            </PrivateRoute>
          }/> 
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
