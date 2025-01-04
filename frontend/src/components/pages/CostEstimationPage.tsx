import { useState } from "react";
import CostForm from "../molecules/CostForm";
import CostEstimationResult from "../organisms/CostEstimationResult";

const CostEstimationPage = () => {
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!cost || !quantity) return;
    const totalCost = parseFloat(cost) * parseInt(quantity);
    setTotal(totalCost);
  };

  const resetForm = () => {
    setItem("");
    setCost("");
    setQuantity("");
    setTotal(null);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="card w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {total === null ? (
          <>
            <h1 className="text-xl font-bold text-purple-600 text-center mb-4">
              Calculate Your Costs
            </h1>
            <CostForm
              item={item}
              cost={cost}
              quantity={quantity}
              setItem={setItem}
              setCost={setCost}
              setQuantity={setQuantity}
              onSubmit={handleSubmit}
            />
          </>
        ) : (
          <>
            <CostEstimationResult
              total={total}
              item={item}
              quantity={parseInt(quantity)}
            />
            <div className="flex justify-center mt-6">
              <button
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Start Over
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CostEstimationPage;