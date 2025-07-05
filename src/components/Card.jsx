import React from 'react';
import { useCategroriesApi } from '../hooks/useCategroriesApi';
import { useSelector } from 'react-redux';
import ShimmerCard from './ShimmerUI';

const Card = ({ item }) => {
  const data = useCategroriesApi(item.url);
  const dat = useSelector((store) => store.apidata);

  return (
    data.length === 0 ? (
      <ShimmerCard />
    ) : (
      <div className="flex flex-col items-center rounded-2xl bg-blue-600 hover:bg-blue-700 transition m-2 p-4 shadow-md">
        <img
          src={data}
          alt={item.name}
          className="w-full h-auto max-w-[200px] rounded-lg object-cover"
          loading="lazy"
        />
        <h1 className="text-lg sm:text-xl font-semibold text-white mt-2 text-center">
          {item.name}
        </h1>
      </div>
    )
  );
};

export default Card;
