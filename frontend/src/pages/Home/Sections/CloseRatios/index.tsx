import { Handshake } from '@phosphor-icons/react';
import { Doughnut } from 'react-chartjs-2';
import { Card } from '../../../../components/Card';

const chartData = {
  labels: ['Failed', 'Successful'],
  datasets: [
    {
      label: '% of close ratios',
      data: [30, 70],
      backgroundColor: [
        'rgba(244,116,116,255)',
        'rgba(70,179,173,255)'
      ],
      border: 0,
      cutout: '80%'
    }
  ]
};

const chartOptions = { maintainAspectRatio: false };

export const CloseRatios = () => (
  <Card
    icon={<Handshake />}
    title="Close ratios"
    hasOptions>
      <div className="relative mb-2">
        <div className="m-auto p-4 after:absolute after:bottom-0 after:left-1/2 after:h-5 after:w-5 after:-translate-x-1/2 after:border-x-[10px] after:border-t-[15px] after:border-x-transparent after:border-t-[rgba(70,179,173,255)]">
          <div>
            <Doughnut
              data={chartData}
              options={chartOptions}
              />
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-primary-500">70%</div>
      </div>
  </Card>
);