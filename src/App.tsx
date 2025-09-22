import { Routes, Route } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';

import axios from 'axios';

import MainLayout from './layouts/MainLayout';
import {logoCDNUrl, menuItems} from './data/Constants'

import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Photos from './pages/Photos';
import PageNotFound from './pages/PageNotFound';

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

  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'serious-header'}
  });

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
    <>
      <Routes>
        <Route path='/' element={<MainLayout headerRef={headerRef} handleHeaderRefClick={handleHeaderRefClick} handleOpen={handleOpen} open={open} handleClose={handleClose} logoCDNUrl={logoCDNUrl} menuItems={menuItems} />}>
          <Route path='/' element={<HomePage posts={posts} photos={photos} />} />
          <Route path="account/registration" element={<Registration />} />
          <Route path='account/login' element={<Login />} />
          <Route path='/posts' element={<Posts posts={posts} />} />
          <Route path='/photos' element={<Photos photos={photos} />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
