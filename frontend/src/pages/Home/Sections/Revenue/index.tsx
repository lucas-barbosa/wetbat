import { ChartBar } from '@phosphor-icons/react';
import { Line } from 'react-chartjs-2';
import { Card } from '../../../../components/Card';

const chartData = {
  labels: ['JAN', '', 'FEB', '', 'MAR', '', 'APR', '', 'MAY', '', 'JUNE', '', 'JULY', '', 'AUG', '', 'SEPT'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 22, 19, 24, 18, 31, 23, 39, 32],
      borderColor: '#5BBFBA',
      backgroundColor: 'white',
    },
    {
      label: 'Dataset 2',
      data: [19, 11, 16, 10, 28, 17, 19, 12, 23, 18],
      borderColor: '#5F6CAF',
      backgroundColor: 'white',
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 10,
        callback: () => ''
      },
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: '#5F6CAF',
        maxRotation: 0
      }
    },
  }
};

export const Revenue = () => (
  <Card
    icon={<ChartBar weight="fill" />}
    title="Revenue"
    hasOptions>
    <div className="p-4">
      <Line data={chartData} options={chartOptions} />
    </div>
  </Card>
);