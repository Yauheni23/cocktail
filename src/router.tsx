import { Navigate, Route, Routes } from 'react-router'

import { Cocktail, ErrorPage, Main } from './components'
import { AVAILABLE_COCKTAILS } from './constants'

const DEFAULT_ROUTE = AVAILABLE_COCKTAILS[0]

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={DEFAULT_ROUTE} />} />
      <Route path="404" element={<ErrorPage />} />
      <Route element={<Main />}>
        <Route path=":cocktail" element={<Cocktail />} />
      </Route>
    </Routes>
  )
}
