import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import type { GlobalProps } from '../common/Types'

function MainLayout({ logoCDNUrl, menuItems, handleOpen, handleClose, open }: any) {
  return (
    <>
        <Header logoCDNUrl={logoCDNUrl} menuItems={menuItems} handleOpen={handleOpen} open={open} handleClose={handleClose} />
        <Outlet />
    </>
  )
}

export default MainLayout