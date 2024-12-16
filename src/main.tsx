import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Router } from './router'

// normalize - из библиотеки. Поэтому CSS
import './styles/normalize.css'
import './styles/normalize-extends.css'

import './index.scss'

// Достаточно хранилища react-query, который хранит данные запросов.
// Стейт менеджер в тестовом задании избытычен. При необходимости, я добавил бы Zustand.
const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
