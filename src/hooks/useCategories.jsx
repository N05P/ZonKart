import React, { useEffect, useState } from 'react';

export const useCategories = (name) => {
  const [dat, setDat] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://dummyjson.com/products/category/" + name);
      const data = await api.json();
      setDat(data.products);  
    };

    fetchData();
  }, [name]);

  return dat;
};
