import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate, useLocation } from "react-router-dom";
import { ChatIcon, SettingsIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/redux-slices/user_slice";
import { selectTeacher } from "../../store/redux-slices/teacher_slice";

const LinkItems = [
  { name: "Home", icon: ViewIcon, route: "/teacher" },
  { name: "Attendance", icon: ViewIcon, route: "/teacher/manage-attendance" },
  { name: "Assignments", icon: StarIcon, route: "/teacher/assignments" },
  { name: "Marks Summary", icon: ChatIcon, route: "/teacher/classes" },
  {
    name: "Course Resources",
    icon: SettingsIcon,
    route: "/teacher/manage-courses",
  },
  { name: "View Library", icon: ChatIcon, route: "/teacher/viewlibrary" },
];

export default function TeacherRootLayout() {
  const user = useSelector(selectUser);
  const teacher = useSelector(selectTeacher);
  const location = useLocation();

  if (user) {
    if (user.type !== "teacher") {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          <SidebarwithHeader linkItems={LinkItems} user={teacher}>
            <Breadcrumbs />
            <Outlet />
          </SidebarwithHeader>
        </div>
      );
    }
  } else {
    if (location.pathname === "/teacher") {
      return <Navigate to="/" />;
    }
  }
}
