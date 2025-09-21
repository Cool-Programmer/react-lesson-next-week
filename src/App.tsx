import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPosts(data))
    .catch(error => console.error('Posts were not loaded:', error));
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => setPhotos(data))
    .catch(error => console.error('Photos were not loaded:', error));
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout handleOpen={handleOpen} open={open} handleClose={handleClose} logoCDNUrl={logoCDNUrl} menuItems={menuItems} />}>
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
