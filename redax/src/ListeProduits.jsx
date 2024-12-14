import React from "react";
import { useSelector } from "react-redux";

export default function ListeProduits() {
  const produits = useSelector((state) => state.produits); 

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Liste des Articles</h1>
      {produits.length > 0 ? (
        <div className="table-responsive shadow rounded">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Libellé</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {produits.map((product) => (
                <tr key={product.code}>
                  <td className="align-middle">{product.code}</td>
                  <td className="align-middle">{product.libelle}</td>
                  <td className="align-middle">
                    <button className="btn btn-primary btn-sm">
                      Ajouter au panier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-warning text-center mt-4">
          Aucun produit trouvé.
        </div>
      )}
    </div>
  );
}
