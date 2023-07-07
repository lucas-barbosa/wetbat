import { Clock } from '@phosphor-icons/react';
import { Card } from '../../../../components/Card';
import { Pie } from 'react-chartjs-2';

const chartData = {
  datasets: [
    {
      data: [2, 7, 4, 4, 10],
      backgroundColor: [
        'rgba(246,116,116,255)',
        'rgba(95,108,176,255)',
        'rgba(50,175,169,255)',
        'rgba(114,114,114,255)',
        'rgba(240,206,132,255)'
      ],
      border: 0
    },
  ],
};

const chartData2 = {
  datasets: [
    {
      data: [7, 4, 4, 10, 2],
      backgroundColor: [
        'rgba(95,108,176,255)',
        'rgba(50,175,169,255)',
        'rgba(114,114,114,255)',
        'rgba(240,206,132,255)',
        'rgba(246,116,116,255)',
      ],
      border: 0
    },
  ],
};

const chartData3 = {
  datasets: [
    {
      data: [4, 4, 10, 2, 7],
      backgroundColor: [
        'rgba(50,175,169,255)',
        'rgba(114,114,114,255)',
        'rgba(240,206,132,255)',
        'rgba(246,116,116,255)',
        'rgba(95,108,176,255)',
      ],
      border: 0
    },
  ],
};

const chartPieOptions = {
  maintainAspectRatio: false
};

export const PotentialRevenue = () => {
  return (
    <Card
      icon={<Clock />}
      title="Potential revenue"
      hasOptions>
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-3">
        <div><Pie data={chartData} options={chartPieOptions} /></div>
        <div><Pie data={chartData2} options={chartPieOptions} /></div>
        <div><Pie data={chartData3} options={chartPieOptions} /></div>
      </div>
    </Card>
  );
};