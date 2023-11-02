import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'; // Import Chakra UI icons

function getIconByLabel(label) {
  switch (label) {
    case 'Total Products':
      return <CheckCircleIcon />;
    case 'Total Categories':
      return <StarIcon />;
    default:
      return <WarningIcon />;
  }
}

export default function CountingAnimation({ label, total }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 500;
    const updateInterval = Math.max(50, (animationDuration / total) * 2);

    let currentCount = 0;
    const intervalId = setInterval(() => {
      currentCount += 1;
      if (currentCount <= total) {
        setCount(currentCount);
      } else {
        clearInterval(intervalId);
      }
    }, updateInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, total);

  return (
    <>
      <Box fontSize="5xl" fontWeight="bold" mb={2} color={"#A9F6F6"}>
        {getIconByLabel(label)}
      </Box>
      <Text fontSize="3xl">
        {count}
      </Text>
      <Text fontSize="xl" color="#120E87">
      {label}
      </Text>
    </>
  );
}
