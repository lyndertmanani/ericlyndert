import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Base from "@/base/layout";
import Home from "@/pages/home";
 
 // Import the RequireAuth component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Base />}>
      <Route index element={<Home />} />
      
      
      {/* 404-helper */}
      {/* <Route path="*" element={<Render errorType="notFoundError" />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
