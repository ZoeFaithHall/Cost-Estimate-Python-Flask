import Text from "../atoms/Text";

interface CostEstimationResultProps {
  total: number;
  item: string;
  quantity: number;
}

const CostEstimationResult = ({ total, item, quantity }: CostEstimationResultProps) => {
  return (
    <div className="card bg-gray-50 shadow-md rounded-lg p-6">
      <Text variant="heading">Estimation Result</Text>
      <p className="text-gray-800 mt-2">
        You need <span className="font-bold">{quantity}</span> of{" "}
        <span className="font-bold">{item}</span>.
      </p>
      <p className="text-purple-600 mt-2">
        Total Cost: <span className="font-bold">${total.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default CostEstimationResult;