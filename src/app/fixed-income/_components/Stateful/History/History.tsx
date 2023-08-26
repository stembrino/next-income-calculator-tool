"use client"
import React, { FC, useEffect } from 'react';
import HistoryResultLog from './HistoryResultLog/HistoryResultLog';

interface HistoryProps {

}

const History: FC<HistoryProps> = ({ }) => {

  return (
    <div className='bg-white rounded-xl p-6 box-border'>
      <HistoryResultLog />
    </div>
  );
};

export default History;