import { useState } from "react";
import ShowEntriesDropdown from "../../components/pages/Admin/ShowEntriesDropdown";
import ProductpageHeader from "../../components/pages/Inventory_Admin/ProductPageHeader";
import ProductPageTable from "../../components/pages/Inventory_Admin/ProductPageTable";
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import { useQuery } from "react-query";
import CreateProductPage from "./CreateProductPage";
import ProductSearch from "../../components/pages/Inventory_Admin/ProductSearch";
import { Spinner } from "@chakra-ui/react";

export default function ProductPage() {
  const [entries, setEntries] = useState(5);
  const [selectedComponent, setSelectedComponent] = useState("ListView");
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => apiMiddleware("admin/products/products"));

  const handleEdit = (productId) => {
    // Implement edit logic here
    console.log(`Edit product with ID ${productId}`);
  };

  const handleDelete = (productId) => {
    // Implement delete logic here
    console.log(`Delete product with ID ${productId}`);
  };

  const handleListViewClick = () => {
    setSelectedComponent("ListView");
  };

  const handleAddClick = () => {
    setSelectedComponent("Add");
  };

  return (
    <ProductpageHeader
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      products={products}
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
          ) : products.length > 0 ? (
            <>
              <ProductSearch />
              <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
              <ProductPageTable
                products={products}
                onEdit={handleEdit}
                onDelete={handleDelete}
                entries={entries}
              />
            </>
          ) : (
            <p>No products found</p>
          )}
        </>
      )}
      {selectedComponent === "Add" && <CreateProductPage />}
    </ProductpageHeader>
  );
}
