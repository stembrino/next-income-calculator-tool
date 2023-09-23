'use client';
import React, { FC } from 'react';
import Header from './Header/Header';
import HistoryResultLog from './ResultLogs/ResultLog';

const Logs: FC = () => {
  return (
    <section className="bg-white rounded-xl p-6 box-border flex flex-col gap-6">
      <Header />
      <HistoryResultLog />
    </section>
  );
};

export default Logs;
