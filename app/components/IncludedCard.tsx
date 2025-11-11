import React from 'react';

interface IncludedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IncludedCard = ({ icon, title, description }: IncludedCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default IncludedCard;
