import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Admin/Dashboard";
import StudentSidebarContent from "./components/common/Sidebar/StudentSidebarContent";
import SidebarWithHeader from "./components/common/Sidebar/Sidebar";
import StudentNav from "./components/common/Sidebar/StudentNav";
import Home from "./pages/Student/Home";
import Assignment from "./pages/Student/Assignment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="home" element={<Home/>} />
      <Route path="assignment" element={<Assignment/>} />
      <Route path="sidebar" element={<StudentSidebarContent/>} />
      <Route path="sidebarh" element={<SidebarWithHeader/>} />
      <Route path="s" element={<StudentNav/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
