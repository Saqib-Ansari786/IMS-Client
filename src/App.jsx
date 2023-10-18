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
import TeacherDashboard from "./pages/Teacher/TeacherDashboard";
import ManageAttendancePage from "./pages/Teacher/ManageAttendence";
import AddStudentAttendancePage from "./pages/Teacher/AddAttendence";
import ViewStudents from "./pages/Admin/ViewStudents";
import AssignmentPage from "./pages/Teacher/Assignment";
import AssignmentDetailsPage from "./pages/Teacher/AssignmentDetails";
import CoursePage from "./pages/Admin/CoursePage";
import ViewTeachers from "./pages/Admin/ViewTeachers";
import TeacherProfileView from "./pages/Admin/TeacherProfileView";
import CourseDetail from "./pages/Teacher/CourseDetails";
import ClassesPage from "./pages/Teacher/Marks_firstpage";
import AssessmentsPage from "./pages/Teacher/Marks_secpage";
import MarksSummaryPage from "./pages/Teacher/Marks_thirdpage";
import AddNewCourse from "./pages/Teacher/AddNewCourse";
import LibraryView from "./pages/Admin/LibraryView";
import CourseMaterialPage from "./pages/Teacher/ManageCourses";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SignIn />} />
      <Route path="*" element={<NotFound />} />
      <Route path="admin/" element={<AdminRootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="studentview" element={<ViewStudents />} />
        <Route path="teacherview" element={<ViewTeachers />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="library" element={<LibraryView />} />
        <Route path="check" element={<TeacherProfileView />} />
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
        <Route index element={<TeacherDashboard />} />
        <Route path="manage-attendance" element={<ManageAttendancePage />} />
        <Route
          path="add-attendance/:courseId"
          element={<AddStudentAttendancePage />}
        />
        <Route path="assignments" element={<AssignmentPage />} />
        <Route
          path="details/:assignmentId"
          element={<AssignmentDetailsPage />}
        />
        <Route path="manage-courses" element={<CourseMaterialPage />} />
        <Route
          path="manage-courses/add-new-course"
          element={<AddNewCourse />}
        />
        <Route path="course-details/:courseId" element={<CourseDetail />} />
        <Route path="classes" element={<ClassesPage />} />
        <Route path="classes/:classId" element={<AssessmentsPage />} />
        <Route
          path="classes/:classId/assessment/:assessmentId"
          element={<MarksSummaryPage />}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
