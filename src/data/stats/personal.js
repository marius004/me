import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2004-01-02T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'birthday',
    label: 'Birthday',
    value: 'Jan 02, 2004',
  },
  {
    key: 'age',
    label: 'Current Age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Warsaw, Poland',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'English, Romanian',
  },

];

export default data;
