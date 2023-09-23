import React, { FC } from 'react';

const ResultAreaLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-wrap gap-x-4 gap-y-5 justify-center sm:justify-normal">
      {children}
    </section>
  );
};

export default ResultAreaLayout;
