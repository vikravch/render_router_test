import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams);
    const params = new URLSearchParams(searchParams);

    for (const [key, value] of params) {
      console.log('key', key, 'value', value);
    }
  }, [searchParams]);

  return <h1 className="title">Home page</h1>;
};
