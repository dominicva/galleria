import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import './index.css';
import ErrorPage from './error-page';
import Gallery from './routes/gallery';
import PaintingDetails, {
  loader as paintingDetailsLoader,
} from './components/PaintingDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/gallery/:painting',
        element: <PaintingDetails />,
        loader: paintingDetailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
