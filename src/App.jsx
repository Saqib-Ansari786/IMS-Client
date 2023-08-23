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

import Home from "./pages/Student/Home";
import Assignment from "./pages/Student/Assignment";
import StudentRootLayout from "./pages/Student/StudentRootLayout";
import AdminRootLayout from "./pages/Admin/AdminRootLayout";
import Profile from "./pages/Admin/Profile";
import { AttendanceDetail } from "./pages/Student/AttendanceDetail";
import { MarksSummary } from "./pages/Student/MarksSummary";
import CourseResources from "./pages/Student/CourseResources";
import { ViewLibrary } from "./pages/Student/ViewLibrary";
import TeacherRootLayout from "./pages/Teacher/TeacherRootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="admin/" element={<AdminRootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="student/" element={<StudentRootLayout />}>
        <Route index element={<Home />} />
        <Route path="assignments" element={<Assignment />} />
        <Route path="attendance" element={<AttendanceDetail />} />
        <Route path="marks" element={<MarksSummary />} />
        <Route path="resources" element={<CourseResources />} />
        <Route path="viewlibrary" element={<ViewLibrary />} />
      </Route>
      <Route path="teacher/" element={<TeacherRootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
