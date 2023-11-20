import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";
import { ChatIcon, SettingsIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/redux-slices/user_slice";

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
];

export default function TeacherRootLayout() {
  const user = useSelector(selectUser);
  if (user) {
    if (user.type !== "teacher") {
      return <Navigate to="/" />;
    } else {
      return (
        <div>
          <SidebarwithHeader linkItems={LinkItems}>
            <Breadcrumbs />
            <Outlet />
          </SidebarwithHeader>
        </div>
      );
    }
  }
}
