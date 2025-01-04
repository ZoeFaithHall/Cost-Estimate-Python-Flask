import React from "react";
import NameForm from "../molecules/NameForm";

interface WelcomePageProps {
  name: string;
  setName: (value: string) => void;
  onSubmit: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ name, setName, onSubmit }) => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="card w-96 bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">
          Welcome to the Cost Estimation Tool
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Enter your name to get started!
        </p>
        <NameForm name={name} setName={setName} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default WelcomePage;