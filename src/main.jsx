// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPageComponent from './pages/AboutPageComponent.jsx'
import ListProductPage from './pages/ListProductPage.jsx'
import NotFound from './pages/NotFound.jsx'
import DashboardLayout from './DashboardLayout/DashboardLayout.jsx'
import RootLayout from './layout.jsx'
import FormComponent from './components/Form/FormComponent.jsx'

// configuration react router

const router = createBrowserRouter([
  //  you will create router here
  {
    path: '/', // root layout (webpate: about, product/proId)
    element: <RootLayout/>,
    children: [
      {
        path: '/', 
        element: <App/>
      },
      {
        path: '/product/:proId',
        element: <ListProductPage />
      },
      {
        path: '/about',
        element: <AboutPageComponent />
      },
      {
        path: '/form', 
        element: <FormComponent/>
      }
    ]
  },
  {
    path: '/dashbaord',
    element: <DashboardLayout/>, //dashboard layout
    children:[{
      
    }]
  },

  {
    path: "*",
    element: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
