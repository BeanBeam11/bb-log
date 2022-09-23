import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/post/:id",
    element: <PostDetail />,
  }
]);

function App() {
  return (
    <div className="w-screen h-screen bg-yellow-800/5 text-yellow-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
