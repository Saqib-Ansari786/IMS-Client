import React, { useState, useEffect } from 'react';
import ShowEntriesDropdown from '../../components/pages/Admin/ShowEntriesDropdown';
import apiMiddleware from "../../components/common/Server/apiMiddleware";
import ProductSearch from '../../components/pages/Inventory_Admin/ProductSearch';
import CreateSalePage from './CreateSalePage';
import SalesTable from "../../components/pages/Inventory_Admin/SalesTable";
import SalesPageHeader from '../../components/pages/Inventory_Admin/SalesPageHeader';
import { Spinner } from '@chakra-ui/react';

  export default function SalesPage() {
    useEffect(() => {
          const fetchSales = async () => {
            try {
              const sales = await apiMiddleware("admin/sales/sales");
              console.log(sales);
              setSales(sales);
            } catch (error) {
              console.log(error);
            }
          };
          fetchSales();
        }, []);
        
    const [entries, setEntries] = useState(5);
    const [selectedComponent, setSelectedComponent] = useState('ListView');
    const [sales, setSales] = useState([]);

      const handleEdit = (saleId) => {
        // Implement edit logic here
        console.log(`Edit sale with ID ${saleId}`);
      };
    
      const handleDelete = (saleId) => {
        // Implement delete logic here
        console.log(`Delete product with ID ${saleId}`);
      };

  
      const handleListViewClick = () => {
        setSelectedComponent('ListView');
      };
    
      const handleAddClick = () => {
        setSelectedComponent('Add');
      };
    
    return (
      <SalesPageHeader
      handleListViewClick={handleListViewClick}
      handleAddClick={handleAddClick}
      sales={sales}
      >
        {selectedComponent === 'ListView' && (
          <>
         { sales.length > 0 ? (
                  <>
                  <ProductSearch/>
                  <ShowEntriesDropdown entries={entries} setEntries={setEntries} />
                  <SalesTable
                    sales={sales}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    entries={entries}
                  />
                  </>
                ) : (
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
                )}
                </>
        )}
        {selectedComponent === 'Add' && <CreateSalePage/> }
      </SalesPageHeader>
    );
  }
  