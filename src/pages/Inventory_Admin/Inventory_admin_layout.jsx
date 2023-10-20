import { Outlet } from "react-router";
import SidebarwithHeader from "../../components/common/Sidebar/SidebarwithHeader";
import { InfoIcon, SearchIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";
import Breadcrumbs from "../../components/common/Breadcrumb/Breadcrumb";

const LinkItems = [
  { name: "Home", icon: InfoIcon, route: "/inventory_admin" },
  { name: "Products", icon: SearchIcon, route: "/inventory_admin/products" },
  {
    name: "Create Products",
    icon: StarIcon,
    route: "/inventory_admin/create-product",
  },
  { name: "Sales", icon: SettingsIcon, route: "/inventory_admin/sales" },
  {
    name: "Create Sales",
    icon: SettingsIcon,
    route: "/inventory_admin/create-sale",
  },
  {
    name: "Sales Report",
    icon: SettingsIcon,
    route: "/inventory_admin/sale-report",
  },
];

export default function InventoryAdminLayout() {
  return (
    <div>
      <SidebarwithHeader linkItems={LinkItems}>
        <Breadcrumbs />
        <Outlet />
      </SidebarwithHeader>
    </div>
  );
}
