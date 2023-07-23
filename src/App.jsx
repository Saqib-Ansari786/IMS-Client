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
import StudentDashboard from "./pages/StudentDashboard";
import SidebarContent from "./components/common/Sidebar/SidebarContent";
import StudentSidebarContent from "./components/common/Sidebar/StudentSidebarContent";
import SidebarWithHeader from "./components/common/Sidebar/Sidebar";
import StudentNav from "./components/common/Sidebar/StudentNav";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="studentdashboard" element={<StudentDashboard/>} />
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
