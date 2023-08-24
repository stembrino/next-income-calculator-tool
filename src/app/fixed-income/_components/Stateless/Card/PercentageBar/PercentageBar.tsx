import React, { FC } from 'react';

type PercentageBarProps = {
  percentage: number
}

const PercentageBar: FC<PercentageBarProps> = ({ percentage }) => {
  return (
    <div>

      <div className="w-full h-2 bg-gray-300 overflow-hidden">
        <div className="h-full bg-slate-800" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="text- text-gray-400">
        {percentage}%
      </span>
    </div>
  );
};

export default PercentageBar;