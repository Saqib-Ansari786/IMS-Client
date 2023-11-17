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
import CourseDetail from "./pages/Teacher/CourseDetails";
import ClassesPage from "./pages/Teacher/Marks_firstpage";
import AssessmentsPage from "./pages/Teacher/Marks_secpage";
import MarksSummaryPage from "./pages/Teacher/Marks_thirdpage";
import AddNewCourse from "./pages/Teacher/AddNewCourse";
import LibraryView from "./pages/Admin/LibraryView";
import CourseMaterialPage from "./pages/Teacher/ManageCourses";
import InventoryAdminLayout from "./pages/Inventory_Admin/Inventory_admin_layout";
import InventoryDashboard from "./pages/Inventory_Admin/InventoryDashboard";
import ProductPage from "./pages/Inventory_Admin/ProductPage";
import CreateProductPage from "./pages/Inventory_Admin/CreateProductPage";
import SalesPage from "./pages/Inventory_Admin/SalesPage";
import CreateSalePage from "./pages/Inventory_Admin/CreateSalePage";
import SalesReportPage from "./pages/Inventory_Admin/SalesReportPage";
import ResultPage from "./pages/Admin/ResultPage";
import TimetablePage from "./pages/Admin/TimetablePage";
import StudentDetail from "./pages/Admin/StudentDetail";
import TeacherDetail from "./pages/Admin/TeacherDetail";
import BookDetail from "./pages/Admin/BookDetail";
import AssignmentCard from "./components/pages/Student/AssignmentCard";
import { useSelector } from "react-redux";
import { selectUser } from "./store/redux-slices/user_slice";
import AdminSignIn from "./pages/AdminSignIn";

const admin = localStorage.getItem("admin");
const student = localStorage.getItem("student");
const teacher = localStorage.getItem("teacher");
const inventory_admin = localStorage.getItem("iadmin");

const assignmentData = {
  title: "Assignment 1",
  totalMarks: "10",
  obtainedMarks: "9",
  dateTime: "10/01/2023 Wednesday",
  teacherComment: "Good Job",
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<SignIn />} />
      <Route path="/check" element={<AdminSignIn />} />
      <Route path="*" element={<NotFound />} />
      

      {/* Admin */}
      <Route
        path="admin/"
        element={
          <AdminRootLayout isAdminAuthenticated={admin ? true : false} />
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="studentview" element={<ViewStudents />} />
        <Route path="studentview/:st_ID" element={<StudentDetail />} />
        <Route path="teacherview" element={<ViewTeachers />} />
        <Route path="teacherview/:t_ID" element={<TeacherDetail />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="library" element={<LibraryView />} />
        <Route path="library/:book_isbn" element={<BookDetail />} />
        <Route path="result" element={<ResultPage />} />
        <Route path="timetable" element={<TimetablePage />} />
      </Route>

      {/* Student */}
      <Route
        path="student/"
        element={<StudentRootLayout isStudentAuthenticated={!!student} />}
      >
        <Route index element={<Home />} />
        <Route path="assignments" element={<Assignment />} />
        <Route path="attendance" element={<AttendanceDetail />} />
        <Route path="marks" element={<MarksSummary />} />
        <Route path="resources" element={<CourseResources />} />
        <Route path="viewlibrary" element={<ViewLibrary />} />
        <Route path="check" element={<AssignmentCard {...assignmentData} />} />
      </Route>

      {/* Teacher */}
      <Route
        path="teacher/"
        element={
          <TeacherRootLayout isTeacherAuthenticated={teacher ? true : false} />
        }
      >
        <Route index element={<TeacherDashboard />} />
        <Route path="manage-attendance" element={<ManageAttendancePage />} />
        <Route
          path="add-attendance/:courseId"
          element={<AddStudentAttendancePage />}
        />
        <Route path="assignments" element={<AssignmentPage />} />
        <Route
          path="assignments/details/:assignmentId"
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

      {/* Inventory Admin */}

      <Route
        path="inventory_admin/"
        element={
          <InventoryAdminLayout
            isInventoryAdminAuthenticated={inventory_admin ? true : false}
          />
        }
      >
        <Route index element={<InventoryDashboard />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="create-product" element={<CreateProductPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="create-sale" element={<CreateSalePage />} />
        <Route path="sales-report" element={<SalesReportPage />} />
      </Route>
    </Route>
  )
);

function App() {
  const user = useSelector(selectUser);
  console.log("user came from redux persist using redux toolkit", user);

  return <RouterProvider router={router} />;
}

export default App;