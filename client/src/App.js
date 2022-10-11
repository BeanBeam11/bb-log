import "react-loading-skeleton/dist/skeleton.css";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import AddPost from './pages/AddPost';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';

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
  },
  {
    path: "/add-post",
    element: <AddPost />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: <Search />,
  }
]);

function App() {
  return (
    <div className="w-screen min-h-screen bg-yellow-800/5 text-yellow-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
