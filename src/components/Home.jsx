import React, { useEffect } from 'react';
import Card from './Card';
import { useCategoryApi } from '../hooks/useCategoryApi';
import { useDispatch, useSelector } from 'react-redux';
import { addApiData } from '../utils/Redux/ApiSlice';
import NothingPresent from './Nothing';
import { Link } from 'react-router';
import ShimmerCard from './ShimmerUI';

const Home = () => {
  const api = useSelector((store) => store.apidata);
  const dispatch = useDispatch();
  const data = useCategoryApi();

  useEffect(() => {
    if (data) {
      dispatch(addApiData(data));
    }
  }, [data, dispatch]);

  return (
    <main className="min-h-screen px-4 sm:px-8 lg:px-14 py-4">
      {data === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array(8).fill(0).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : api.length === 0 ? (
        <NothingPresent />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {api.map((item) => (
            <Link key={item.id} to={`/box/${item.slug}`}>
              <Card item={item} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default Home;
