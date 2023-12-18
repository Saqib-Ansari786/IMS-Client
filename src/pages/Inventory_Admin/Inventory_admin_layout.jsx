import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
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
  { name: "Sales", icon: SettingsIcon, route: "sales" },
  {
    name: "Create Sales",
    icon: SettingsIcon,
    route: "create-sale",
  },
  {
    name: "Sales Report",
    icon: SettingsIcon,
    route: "sales-report",
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
          <SidebarwithHeader linkItems={LinkItems}>
            <Breadcrumbs />
            <Outlet />
          </SidebarwithHeader>
        </div>
      );
    }
  } else {
    if (
      location.pathname === "/inventory_admin" ||
      location.pathname === "/inventory_admin/" ||
      location.pathname === "/inventory_admin/products" ||
      location.pathname === "/inventory_admin/products/" ||
      location.pathname === "/inventory_admin/create-product" ||
      location.pathname === "/inventory_admin/create-product/" ||
      location.pathname === "/inventory_admin/sales" ||
      location.pathname === "/inventory_admin/sales/" ||
      location.pathname === "/inventory_admin/create-sale" ||
      location.pathname === "/inventory_admin/create-sale/" ||
      location.pathname === "/inventory_admin/sales-report" ||
      location.pathname === "/inventory_admin/sales-report/"
    ) {
      return <Navigate to="/iadmin-login" />;
    }
  }
}
