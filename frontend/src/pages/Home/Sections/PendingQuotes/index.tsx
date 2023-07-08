import { ClockCounterClockwise } from '@phosphor-icons/react';
import { Card } from '../../../../components/Card';

const items = [
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
  { id: '123455678', name: 'Katty Abcdefghij', destination: 'Vancounver', price: 1000.00 },
];

export const PendingQuotes = () => (
  <Card
    icon={<ClockCounterClockwise />}
    title="Pending quotes"
    isRefreshable
    isDraggable>
    <div className="p-4">
      <table className="w-full text-left text-gray-500">
        <thead className="text-sm font-medium uppercase">
          <tr>
            <th>ID #</th>
            <th>Name</th>
            <th>Destination</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {items.map(item => (
            <tr>
              <td className="py-2">{item.id}</td>
              <td className="py-2">{item.name}</td>
              <td className="py-2 uppercase">{item.destination}</td>
              <td className="py-2">$ {item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);