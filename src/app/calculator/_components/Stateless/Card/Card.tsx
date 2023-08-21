import React, { FC } from 'react';
import PercentageBar from './PercentageBar/PercentageBar';
import Tag from './Tag/Tag';

type CardProps = {
  title: string;
  percentage: number;

}

const Card: FC<CardProps> = ({ percentage = 50, title }) => {
  const mock = [
    { id: 1, label: "Valor investido", value: 100 },
    { id: 2, label: "Valor Bruto", value: 30000 },
    { id: 3, label: "Impostos", value: 30000 }
  ]

  const Tags = mock.map((info) => <Tag key={info.id} label={info.label} value={info.value} />)

  return (
    <div className='w-96 px-6 py-4 bg-slate-50 rounded-3xl'>
      <div>{title}</div>
      <div className='py-6'>
        <PercentageBar percentage={percentage} />
      </div>
      <div className=''>
        {Tags}
      </div>
    </div>
  );
};

export default Card;