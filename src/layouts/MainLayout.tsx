import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header/Header'
import type { GlobalProps } from '../common/Types'

function MainLayout({ logoCDNUrl, menuItems }: GlobalProps) {
  return (
    <>
        <Header logoCDNUrl={logoCDNUrl} menuItems={menuItems} />
        <Outlet />
    </>
  )
}

export default MainLayout