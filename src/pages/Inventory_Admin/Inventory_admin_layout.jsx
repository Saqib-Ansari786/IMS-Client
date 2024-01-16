import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import {
  BellIcon,
  CalendarIcon,
  InfoIcon,
  SearchIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
} from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/redux-slices/user_slice";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "" },
  { name: "Products", icon: SearchIcon, route: "products" },
  {
    name: "Create Products",
    icon: StarIcon,
    route: "create-product",
  },
  { name: "Issued Products", icon: SunIcon, route: "issued-products" },
  {
    name: "Issue Product",
    icon: BellIcon,
    route: "issue-product",
  },
  {
    name: "Products Report",
    icon: CalendarIcon,
    route: "products-report",
  },
];

export default function InventoryAdminLayout() {
  const location = useLocation();
  const user = useSelector(selectUser);
  if (user) {
    if (user.type !== "iadmin") {
      return <Navigate to="/" />;
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
    if (
      location.pathname === "/iadmin" ||
      location.pathname === "/iadmin/" ||
      location.pathname === "/iadmin/products" ||
      location.pathname === "/iadmin/products/" ||
      location.pathname === "/iadmin/create-product" ||
      location.pathname === "/iadmin/create-product/" ||
      location.pathname === "/iadmin/issued-products" ||
      location.pathname === "/iadmin/issue-product" ||
      location.pathname === "/iadmin/products-report"
    ) {
      return <Navigate to="/iadmin-login" />;
    }
  }
}
