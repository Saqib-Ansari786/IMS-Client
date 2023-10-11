import React from 'react';
import { Select } from '@chakra-ui/react';

const ShowEntriesDropdown = ({ entries, setEntries }) => {
  const options = [5, 10, 25, 50, 100];

  return (
    <Select
      value={entries}
      onChange={(e) => setEntries(parseInt(e.target.value))}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default ShowEntriesDropdown;
