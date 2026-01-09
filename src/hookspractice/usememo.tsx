// Expensive calculations run on every render.

// Stores the result of a calculation.


import { useMemo, useState } from "react";

function PriceCalculator() {
  const [price, setPrice] = useState(100);

  const tax = useMemo(() => {
    console.log("Calculating tax");
    return price * 0.18;
  }, [price]);

  return (
    <>
      <p>Tax: {tax}</p>
      <button onClick={() => setPrice(price + 100)}>
        Increase Price
      </button>
    </>
  );
}

export default PriceCalculator;
