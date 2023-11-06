import React, { useState, useEffect } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import ProductSearch from "../../components/pages/Inventory_Admin/ProductSearch";
import CreateSalePage from "./CreateSalePage";
import SalesTable from "../../components/pages/Inventory_Admin/SalesTable";
import SalesPageHeader from "../../components/pages/Inventory_Admin/SalesPageHeader";
import { Spinner } from "@chakra-ui/react";
import { useQuery } from "react-query";
import NotDataFoundMessage from "../../components/pages/Admin/NoDataFoundMessage";

export default function SalesPage() {
  const {
    data: sales,
    isLoading,
    isError,
  } = useQuery("sales", () => apiMiddleware("admin/sales/sales"));
  const [entries, setEntries] = useState(5);
  const [selectedComponent, setSelectedComponent] = useState("ListView");

  const handleListViewClick = () => {
    setSelectedComponent("ListView");
  };

  const handleAddClick = () => {
    setSelectedComponent("Add");
  };

  return (
    <SalesPageHeader
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      sales={sales}
    >
      {selectedComponent === "ListView" && (
        <>
          {isLoading ? (
            <>
              <Spinner
                marginTop={10}
                size="xl"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.300"
              />
              <p>Loading...</p>
            </>
          ) : isError ? (
            <p>Error</p>
          ) : sales.length > 0 ? (
            <>
              <ProductSearch />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <SalesTable sales={sales} entries={entries} />
            </>
          ) : (
            <NotDataFoundMessage/>
          )}
        </>
      )}
      {selectedComponent === "Add" && <CreateSalePage />}
    </SalesPageHeader>
  );
}
