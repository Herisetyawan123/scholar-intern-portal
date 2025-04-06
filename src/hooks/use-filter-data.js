import { useState } from 'react';

const useFilterData = (data, where) => {
  const [search, setSearch] = useState('');

  const handleFilterChange = (e) => {
    setSearch(e.target.value);
  };

  if (data.length === 0) {
    return { filtered: [], handleFilterChange, search };
  }

  if (!data.length || !Object.prototype.hasOwnProperty.call(data[0], where)) {
    throw new Error(`Key "${where}" is not exist in the data`);
  }

  const filtered = data.filter((item) =>
    item[where].toLowerCase().includes(search.toLowerCase())
  );

  return { filtered, handleFilterChange, search };
};

export default useFilterData;
