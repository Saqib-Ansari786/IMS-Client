import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";
import { Navigate } from "react-router-dom";

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

export default function InventoryAdminLayout({
  isInventoryAdminAuthenticated,
}) {
  if (!isInventoryAdminAuthenticated) {
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
