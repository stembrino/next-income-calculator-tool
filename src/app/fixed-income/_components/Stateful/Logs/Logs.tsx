"use client"
import React, { FC } from 'react';
import Header from './Header/Header';
import HistoryResultLog from './ResultLogs/ResultLog';

interface HistoryProps {

}

const Logs: FC<HistoryProps> = ({ }) => {

  return (
    <div className='bg-white rounded-xl p-6 box-border flex flex-col gap-6'>
      <Header />
      <HistoryResultLog />
    </div>
  );
};

export default Logs;