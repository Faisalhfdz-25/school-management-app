import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/Layouts/AppLayout.jsx'
import './index.css'
import About from './Pages/about.jsx'
import Login from './Pages/Auth/login.jsx'
import Register from './Pages/Auth/register.jsx'
import Contact from './Pages/contact.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Features from './Pages/features.jsx'
import Home from './Pages/home.jsx'
import Pricing from './Pages/pricing.jsx'
import Students from './Pages/students.jsx'
import Users from './Pages/Users/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Home />
      </AppLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <AppLayout>
        <About />
      </AppLayout>
    ),
  },
  {
    path: "/features",
    element: (
      <AppLayout>
        <Features />
      </AppLayout>
    ),
  },
  {
    path: "/pricing",
    element: (
      <AppLayout>
        <Pricing />
      </AppLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <AppLayout>
        <Contact />
      </AppLayout>
    ),
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/students",
    element: (
      <AppLayout>
        <Students />
      </AppLayout>
    ),
  },
  {
    path: "/users",
    element: (
      <AppLayout>
        <Users />
      </AppLayout>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
