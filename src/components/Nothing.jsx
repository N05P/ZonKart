import React from 'react';
import { addApiData } from '../utils/Redux/ApiSlice';
import { useDispatch } from 'react-redux';
import { useCategoryApi } from '../hooks/useCategoryApi';

const NothingPresent = () => {

    const data = useCategoryApi();
    const dispatch = useDispatch();
    
    const handleRefresh=()=>{
            dispatch(addApiData(data))
    }
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-2xl font-semibold mb-4 text-gray-600">SEARCH ITEM IS NOT PRESENT</p>
      <button
        onClick={handleRefresh}
        className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
      >
        Refresh
      </button>
    </div>
  );
};

export default NothingPresent;
