import React, { useState } from "react";
import { ADD_PRODUCT } from "./productReducer"; // Ensure correct path
import { useDispatch } from "react-redux";

function AddProduit() {
  const [code, setCode] = useState("");
  const [libelle, setLibelle] = useState("");

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    const newProduct = { code, libelle };
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
    setCode("");
    setLibelle("");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm rounded">
        <div className="card-body">
          <h3 className="text-center mb-4">Ajouter un Produit</h3>
          <form onSubmit={handleClick}>
            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Code Produit
              </label>
              <input
                type="text"
                id="code"
                className="form-control"
                placeholder="Entrez le code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="libelle" className="form-label">
                Libellé Produit
              </label>
              <input
                type="text"
                id="libelle"
                className="form-control"
                placeholder="Entrez le libellé"
                value={libelle}
                onChange={(e) => setLibelle(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduit;
