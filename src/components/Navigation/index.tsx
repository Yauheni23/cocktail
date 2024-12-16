import { NavLink } from 'react-router'
import cn from 'classnames'

import { AVAILABLE_COCKTAILS } from '../../constants'

import CN from './style.module.scss'

export const Navigation = () => {
  return (
    <nav className={CN.nav}>
      {AVAILABLE_COCKTAILS.map((cocktail) => (
        <NavLink key={cocktail} to={cocktail} className={({ isActive }) => cn(CN.link, isActive && CN.active)}>
          {cocktail}
        </NavLink>
      ))}
    </nav>
  )
}
