import { ClockCounterClockwise, XCircle } from '@phosphor-icons/react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '../../../../components/Card';
import { Spinner } from '../../../../components/Spinner';
import { getQuotes } from '../../../../services/quotes/get-quotes';

type Quote = {
  id: number;
  customerName: string;
  from: string;
  destination: string;
  passengerCount: number;
  departureDate: Date;
  returnDate: Date;
  modeOfTransportation: string;
}

export const PendingQuotes = () => {
  const {
    data,
    isLoading,
    refetch
  } = useQuery<Quote[]>({ queryKey: ['quotes'], queryFn: getQuotes, retry: false, refetchOnWindowFocus: false });

  return (
    <Card
      icon={<ClockCounterClockwise />}
      title="Pending quotes"
      onRefreshClick={() => refetch()}
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
            {isLoading && (
              <tr>
                <td colSpan={4} className="py-8">
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                </td>
              </tr>
            )}

            {!isLoading && !data?.length && (
              <tr>
                <td colSpan={4} className="py-8">
                  <div className="flex w-full flex-col items-center justify-center">
                    <XCircle size={30} />
                    <p>No quotes found!</p>
                  </div>
                </td>
              </tr>
            )}

            {data?.length && data.map(item => (
              <tr>
                <td className="py-2">{item.id.toString().padStart(8, '0')}</td>
                <td className="py-2">{item.customerName}</td>
                <td className="py-2 uppercase">{item.destination}</td>
                <td className="py-2">$1,000</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};