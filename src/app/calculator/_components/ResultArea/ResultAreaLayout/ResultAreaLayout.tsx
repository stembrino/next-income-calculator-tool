import React, { FC } from 'react';

const ResultAreaLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default ResultAreaLayout;