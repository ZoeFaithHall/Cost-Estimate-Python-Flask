import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import WelcomePage from "./components/pages/WelcomePage";
import MainPage from "./components/pages/MainPage";
import CostEstimationPage from "./components/pages/CostEstimationPage";

// GraphQL Query
const HELLO_QUERY = gql`
  query Hello($name: String!) {
    hello(name: $name)
  }
`;

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);
  const [isMainPageComplete, setIsMainPageComplete] = useState(false);

  const { data, loading, error } = useQuery(HELLO_QUERY, {
    variables: { name },
    skip: !isNameSubmitted,
  });

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsNameSubmitted(true);
    }
  };

  const handleMainPageComplete = () => {
    setIsMainPageComplete(true);
  };

  if (!isNameSubmitted) {
    return <WelcomePage name={name} setName={setName} onSubmit={handleNameSubmit} />;
  }

  if (!isMainPageComplete) {
    return (
      <MainPage
      name={name}
      data={data}
      loading={loading}
      error={error}
      onComplete={handleMainPageComplete}
    />
    );
  }

  return <CostEstimationPage />;
};

export default App;