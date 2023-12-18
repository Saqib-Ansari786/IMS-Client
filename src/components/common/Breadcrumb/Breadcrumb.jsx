import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Breadcrumb>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <BreadcrumbItem key={name} isCurrentPage>
            <BreadcrumbLink>{name}</BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={name}>
            <BreadcrumbLink as={Link} to={routeTo}>
              {name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
