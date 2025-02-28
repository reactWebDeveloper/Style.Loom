import React from "react";
import TitleComponent from "./../../Components/TitleComponent/TitleComponent";
import Hero2Component from "./../../Components/Hero2Component/Hero2Component";
import { useEffect, useState } from "react";
import "./ProductsCategory.css";
import { productsData } from "./../../Data/productsData";
import ProductComponent from "./../../Components/ProductComponent/ProductComponent";
import PaginationComponent from "./../../Components/PaginationComponent/PaginationComponent";
import FilterToggleComponent from "./../../Components/FilterToggleComponent/FilterToggleComponent";

export default function ProductsCategory() {
  const [isFilterVisible, setIsFilterVisible] = useState(
    window.innerWidth > 768 ? true : false
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  // Function to handle window resize and update screen size state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
      window.innerWidth > 768
        ? setIsFilterVisible(true)
        : setIsFilterVisible(false);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const productsTemp = [
    ...productsData.womenProductsData,
    ...productsData.kidsProductsData,
    ...productsData.menProductsData,
    ...productsData.womenProductsData,
    ...productsData.kidsProductsData,
    ...productsData.menProductsData,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalItems = productsTemp.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Simulate fetching data based on currentPage and itemsPerPage
  const items = productsTemp.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-162">
      <Hero2Component />

      <div className="AA-row">
        <div
          className={`filter-list  ${
            isSmallScreen
              ? isFilterVisible
                ? "visible list"
                : "hidden list"
              : ""
          }`}
        >
          <FilterToggleComponent
            isFilterVisible={isFilterVisible}
            toggleFilterVisibility={() => setIsFilterVisible(!isFilterVisible)}
            isSmallScreen={isSmallScreen}
          />
        </div>
        <div className="AA-products-all">
          <TitleComponent
            title={"Elevate Your Style with Our Latest Collection"}
            desc={"Each piece is crafted to enhance your fashion statement."}
            fullImage={false}
          />
          {isSmallScreen && (
            <div className="toggle-btn-sec">
              <button
                className="toggle-button"
                onClick={toggleFilterVisibility}>
                  <span>Filters</span>
                  <i class="fa-solid fa-filter"></i>
              </button>
            </div>
          )}
          <div className="es-products d-flex flex-wrap">
            {items.map((product, index) => (
              <ProductComponent
                id={index}
                img={product.img}
                title={product.title}
                category={product.category}
                fit={product.fit}
                price={product.price}
              />
            ))}
          </div>

          <PaginationComponent
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
