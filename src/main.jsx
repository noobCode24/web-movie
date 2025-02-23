// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './routes'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './store/store'
 
axios.defaults.baseURL = "https://api.themoviedb.org/3"
// axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`

const token = import.meta.env.VITE_ACCESS_TOKEN;
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
    console.error('Access token is not defined in environment variables');
}

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
) 
