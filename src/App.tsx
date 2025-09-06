import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import {logoCDNUrl, menuItems} from './data/Constants'
import {photos} from './data/photos';
import {posts} from './data/posts';

import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Photos from './pages/Photos';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout logoCDNUrl={logoCDNUrl} menuItems={menuItems} />}>
          <Route path='/' element={<HomePage posts={posts} photos={photos} />} />
          <Route path="account/registration" element={<Registration />} />
          <Route path='account/login' element={<Login />} />
          <Route path='/posts' element={<Posts posts={posts} />} />
          <Route path='/photos' element={<Photos photos={photos} />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
