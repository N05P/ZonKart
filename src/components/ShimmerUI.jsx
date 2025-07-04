  import React from 'react';

  const ShimmerCard = () => {
    return (
      <div className="flex flex-col rounded-xl items-center bg-orange-300 m-2 p-4 animate-pulse">
        <div className="w-40 h-40 bg-gray-300 rounded mb-2"></div>
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </div>
    );
  };

  export default ShimmerCard;
