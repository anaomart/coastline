import React from 'react';

const ServiceCard = ({ image, serviceName, buttonText,  }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={serviceName} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{serviceName}</div>
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
