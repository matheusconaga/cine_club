import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const router = createBrowserRouter([

    {
      path: "/",
      element: <App/>
    },
    {
      path: "/teste",
      element: <h1>Essa é outra tela</h1>
    }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
