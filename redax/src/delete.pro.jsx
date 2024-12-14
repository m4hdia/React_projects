import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_PRODUCT } from "./product";

function ProductList({ setEditProduct }) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(DELETE_PRODUCT(id));
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.code} - {product.libelle}
            <button onClick={() => setEditProduct(product)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
