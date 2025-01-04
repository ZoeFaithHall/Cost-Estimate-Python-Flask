import React from "react";

const technologies = [
  "React with TypeScript for frontend development",
  "Vite for fast builds and development",
  "Tailwind CSS for responsive styling",
  "DaisyUI for pre-styled components",
  "Flask for the backend with RESTful APIs",
  "GraphQL for flexible and efficient querying",
];

const TechnologiesList: React.FC = () => (
  <div className="card bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
    <h2 className="text-xl font-bold text-purple-600 mb-4">Technologies Used</h2>
    <ul className="list-disc list-inside text-gray-800">
      {technologies.map((tech, index) => (
        <li key={index} className="mb-2">
          {tech}
        </li>
      ))}
    </ul>
  </div>
);

export default TechnologiesList;