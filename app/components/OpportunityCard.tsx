import React from 'react';

interface OpportunityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OpportunityCard = ({ icon, title, description }: OpportunityCardProps) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md text-left transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 border border-blue-100 flex items-start">
      <div className="flex-shrink-0 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default OpportunityCard;
