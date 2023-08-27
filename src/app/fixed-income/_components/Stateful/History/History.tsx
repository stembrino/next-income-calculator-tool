"use client"
import React, { FC, useEffect } from 'react';
import HistoryResultLog from './HistoryResultLog/HistoryResultLog';
import Header from './Header/Header';

interface HistoryProps {

}

const History: FC<HistoryProps> = ({ }) => {

  return (
    <div className='bg-white rounded-xl p-6 box-border flex flex-col gap-6'>
      <Header />
      <HistoryResultLog />
    </div>
  );
};

export default History;