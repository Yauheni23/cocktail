import { Outlet } from 'react-router'

import { Navigation } from '../Navigation'

import CN from './style.module.scss'

export const Main = () => {
  return (
    <main className={CN.main}>
      <Navigation />
      <Outlet />
    </main>
  )
}
