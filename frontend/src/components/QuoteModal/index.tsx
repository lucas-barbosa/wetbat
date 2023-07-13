import { X } from '@phosphor-icons/react';

type QuoteModalProps = {
  id: number;
  customerName: string;
  from: string;
  destination: string;
  passengerCount: number;
  departureDate: string;
  returnDate: string;
  modeOfTransportation: string;
  onClose: () => void;
};

export const QuoteModal = ({
  id,
  customerName,
  from,
  destination,
  passengerCount,
  departureDate,
  returnDate,
  modeOfTransportation,
  onClose
}: QuoteModalProps) => (
  <>
    <div className="fixed inset-0 left-1/2 top-1/2 z-[1100] w-auto max-w-lg -translate-x-1/2 -translate-y-1/2 outline-none focus:outline-none">
      <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
        <div className="flex items-center justify-between rounded-t border-b border-solid border-slate-200 p-5">
          <h3 className="text-2xl font-medium ">
            Quote #{id.toString().padStart(8, '0')}
          </h3>

          <button
            className="p-2 outline-primary-500 transition-colors hover:text-primary-500"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="relative flex-auto p-6 text-left">
          <table>
            <tbody>
              <tr>
                <th className="py-1 pr-2 font-medium">Customer Name:</th>
                <td>{customerName}</td>
              </tr>

              <tr>
                <th className="py-1 pr-2 font-medium">From:</th>
                <td>{from}</td>
              </tr>

              <tr>
                <th className="py-1 pr-2 font-medium">Destination:</th>
                <td>{destination}</td>
              </tr>

              <tr>
                <th className="py-1 pr-2 font-medium">Departure Date:</th>
                <td>{new Date(departureDate).toDateString()}</td>
              </tr>

              <tr>
                <th className="py-1 pr-2 font-medium">Return Date:</th>
                <td>{new Date(returnDate).toDateString()}</td>
              </tr>

              <tr>
                <th className="py-1 pr-2 font-medium">Quantity of People:</th>
                <td>{passengerCount}</td>
              </tr>

              <tr>
                <th className="py-1 pr-2 font-medium">Mode of Transportation:</th>
                <td>{modeOfTransportation}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="fixed inset-0 z-[1050] bg-black opacity-25" onClick={onClose}></div>
  </>
);