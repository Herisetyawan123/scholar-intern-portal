import { useState } from 'react';

const useFilterData = (data, where) => {
  const [search, setSearch] = useState('');

  if (!data.length || !Object.prototype.hasOwnProperty.call(data[0], where)) {
    throw new Error(`Key "${where}" is not exist in the data`);
  }

  const filtered = data.filter((item) =>
    item[where].toLowerCase().includes(search.toLowerCase())
  );

  const handleFilterChange = (e) => {
    setSearch(e.target.value);
  };

  return { filtered, handleFilterChange, search };
};

export default useFilterData;
