import { Routes, Route } from 'react-router-dom'
import { useEffect, useState, useRef, createContext } from 'react';

import axios from 'axios';

import MainLayout from './layouts/MainLayout';
import {logoCDNUrl, menuItems} from './data/Constants'

export const AppContext = createContext({});
export const ContentContext = createContext({});

import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import PageNotFound from './pages/PageNotFound';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'serious-header'}
});

function App() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Functionality for Back to Top button
  const headerRef = useRef<HTMLDivElement>(null);
  const handleHeaderRefClick = () => {
    headerRef?.current?.scrollIntoView({behavior : "smooth"})
  }

  useEffect(() => {
    instance.get('/posts')
    .then((response: any) => setPosts(response.data))
    .catch((error: any) => console.error('Posts were not loaded:', error));
  }, [])

  useEffect(() => {
    instance.get('/photos')
    .then((response: any) => setPhotos(response.data))
    .catch((error: any) => console.error('Photos were not loaded:', error));
  }, [])

  return (
    <AppContext.Provider value={{ logoCDNUrl, menuItems }}>
      <ContentContext.Provider value={{ posts, photos }}>
        <Routes>
          <Route path="/" element={<MainLayout headerRef={headerRef} handleHeaderRefClick={handleHeaderRefClick} handleOpen={handleOpen} open={open} handleClose={handleClose} /> }>
            <Route index element={<HomePage />} />
            <Route path="posts" element={<Posts />} />
            <Route path="photos" element={<Photos />} />

            <Route path="account">
              <Route path="registration" element={<Registration />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ContentContext.Provider>
    </AppContext.Provider>
  )
}

export default App
