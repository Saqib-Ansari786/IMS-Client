import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate, useLocation } from "react-router-dom";
import {
  InfoIcon,
  SearchIcon,
  StarIcon,
  TimeIcon,
  CalendarIcon,
  CheckIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/redux-slices/user_slice";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/admin" },
  { name: "Students", icon: SearchIcon, route: "/admin/studentview" },
  { name: "Teachers", icon: StarIcon, route: "/admin/teacherview" },
  { name: "Library", icon: EditIcon, route: "/admin/library-management" },
  { name: "Courses", icon: CalendarIcon, route: "/admin/courses" },
  { name: "Result", icon: CheckIcon, route: "/admin/result" },
];

export default function AdminRootLayout() {
  const user = useSelector(selectUser);
  const location = useLocation();

  if (user) {
    if (user.type !== "admin") {
      return <Navigate to="/admin-login" />;
    } else {
      return (
        <div>
          <SidebarwithHeader linkItems={LinkItems} user={user}>
            <Breadcrumbs />
            <Outlet />
          </SidebarwithHeader>
        </div>
      );
    }
  } else {
    if (location.pathname === "/admin") {
      return <Navigate to="/admin-login" />;
    }
  }
}
