import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from './containers/Header';
const ProductListing = lazy(() => import("./containers/ProductListing"))
const ProductDetail = lazy(() => import("./containers/ProductDetail"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListing/>,
  },
  {
    path: "/product/:productId",
    element: <ProductDetail/>
  },
])

function App() {
  return (
    <div className="App bg-white">
      <Suspense fallback={<div>Loading</div>}>
        <Header/>
        <RouterProvider router={router}/>
      </Suspense>
    </div>
  );
}

export default App;
