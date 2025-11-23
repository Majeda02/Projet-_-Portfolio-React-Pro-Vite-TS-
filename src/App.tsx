import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '@/app/RootLayout';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Experience from '@/pages/Experience';
import Education from '@/pages/Education';
import Certifications from '@/pages/Certifications';
import Contact from '@/pages/Contact';
import { Toaster } from 'react-hot-toast';

// Configuration des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "experience", element: <Experience /> },
      { path: "education", element: <Education /> },
      { path: "certifications", element: <Certifications /> },
      { path: "contact", element: <Contact /> },
      { 
        path: "*",
        element: (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404</h1>
              <p className="text-xl">Page non trouvée</p>
            </div>
          </div>
        )
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </>
  );
}

export default App;