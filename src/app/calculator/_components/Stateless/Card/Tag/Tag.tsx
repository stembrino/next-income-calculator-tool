import React, { FC } from 'react';

type TagProps = {
  label: string;
  value: number;
}

const Tag: FC<TagProps> = ({ label, value }) => {
  const formattedCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <>
      <div>
        <span>{label}</span><span>{formattedCurrency.format(value)}</span>
      </div>
    </>
  );
};

export default Tag;