import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={products}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
