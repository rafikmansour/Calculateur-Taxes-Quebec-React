import React, { useState } from "react";

const QuebecTaxCalculator = () => {
  const [productPrice, setProductPrice] = useState("");
  const [taxRateTPS, setTaxRateTPS] = useState(0.05); // Taux de TPS (5%)
  const [taxRateTVQ, setTaxRateTVQ] = useState(0.09975); // Taux de TVQ (9.975%)
  const [totalPrice, setTotalPrice] = useState(0);

  // Fonction pour calculer le total après taxes
  const calculateTotalPrice = () => {
    const price = parseFloat(productPrice);
    if (isNaN(price)) {
      setTotalPrice("Veuillez entrer un montant valide.");
    } else {
      const totalTPS = price * taxRateTPS;
      const totalTVQ = (price + totalTPS) * taxRateTVQ;
      const totalPrice = price + totalTPS + totalTVQ;
      setTotalPrice(totalPrice.toFixed(2)); // Arrondir à 2 décimales
    }
  };

  // Gérer le changement du prix du produit
  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  // Gérer la soumission du formulaire pour calculer les taxes
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotalPrice();
  };

  return (
    <div>
      <h2>Calculateur de taxes au Québec</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prix du produit :
          <input type="number" step="0.01" value={productPrice} onChange={handleProductPriceChange} />
        </label>
        <button type="submit">Calculer les taxes</button>
      </form>
      {totalPrice !== 0 && <div>Total après taxes : {totalPrice} $</div>}
    </div>
  );
};

export default QuebecTaxCalculator;
