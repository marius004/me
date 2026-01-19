import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    <Table data={data} />
  </>
);

export default PersonalStats;
