import React from 'react';

interface OpportunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OpportunityCard = ({ icon, title, description }: OpportunityCardProps) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 border border-blue-100">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default OpportunityCard;
