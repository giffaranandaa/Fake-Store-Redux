import React from "react";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="flex items justify-center">
        <Link to={`/product/${id}`}>
        <div className="w-[230px] h-auto rounded overflow-hidden shadow-lg border-2"  key={id}>
          <div className="px-5 py-5 w-full h-[200px] border-2">
            <img className="object-contain w-full h-full" src={image} alt={title} />
          </div>
          <div className="px-6 py-4 w-full max-w-[300px] overflow-hidden">
            <div className="font-bold text-sm mb-3 truncate">{title}</div>
            <div className="font-bold text-sm">$ {price}</div>
            <p className="text-black text-[12px] capitalize">{category}</p>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {renderList}
      </div>
    </>
  );
};

export default ProductComponent;
