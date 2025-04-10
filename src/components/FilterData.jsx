import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import { Link } from "react-router";
import NoProduct from "../assets/Images-main/not_found.png"

const FilterData = () => {
  const filterProducts = useSelector((state) => state.product.filteredData);
  return (
    <div>
      <div className="md:px-16 lg:px-24 mx-auto py-12 p-5 m-4">
        <Link to="/shop">
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {filterProducts.length === 0 ? (
              <div className="col-span-full flex justify-center">
                <img height={300} width={300} src={NoProduct} alt="" />
              </div>
          ) : (
            filterProducts.map((product) => (
                // here i add key 
              <ProductCart key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterData;
