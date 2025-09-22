import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import BackToTop from '../components/BackToTop/BackToTop'

function MainLayout({ logoCDNUrl, menuItems, handleOpen, handleClose, open, headerRef, handleHeaderRefClick }: any) {
  return (
    <>
        <Header logoCDNUrl={logoCDNUrl} menuItems={menuItems} handleOpen={handleOpen} open={open} headerRef={headerRef} handleClose={handleClose} />
        <Outlet />
        <BackToTop handleHeaderRefClick={handleHeaderRefClick} />
    </>
  )
}

export default MainLayout