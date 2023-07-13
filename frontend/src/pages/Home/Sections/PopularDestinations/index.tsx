import { PaperPlaneTilt } from '@phosphor-icons/react';
import { Card } from '../../../../components/Card';
import { WorldMap } from '../../../../components/WorldMap';

type PopularDestinationsProps = {
  className?: string;
};

export const PopularDestinations = ({ className = '' }: PopularDestinationsProps) => (
  <Card
    className={className}
    icon={<PaperPlaneTilt />}
    title="Popular destinations & packages"
    hasOptions>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr]">
      <div className="h-full border-b-2 border-gray-300 p-4 md:border-b-0 md:border-r-2">
        <table className="border-separate border-spacing-x-4">
          <tbody className="text-gray-500">
            <tr>
              <td className="py-2 leading-tight">Lorem ipsum dolor sit</td>
              <td className="py-2"><div className="h-2.5 w-32 bg-[#32afa9]"></div></td>
            </tr>

            <tr>
              <td className="py-2 leading-tight">Lorem ipsum dolor sit</td>
              <td className="py-2"><div className="h-2.5 w-16 bg-[#f0d599]"></div></td>
            </tr>

            <tr>
              <td className="py-2 leading-tight">Lorem ipsum dolor sit</td>
              <td className="py-2"><div className="h-2.5 w-16 bg-[#f67474]"></div></td>
            </tr>

            <tr>
              <td className="py-2 leading-tight">Lorem ipsum dolor sit</td>
              <td className="py-2"><div className="h-2.5 w-32 bg-[#b6e2ff]"></div></td>
            </tr>

            <tr>
              <td className="py-2 leading-tight">Lorem ipsum dolor sit</td>
              <td className="py-2"><div className="h-2.5 w-20 bg-[#dcb1e9]"></div></td>
            </tr>

            <tr>
              <td className="py-2 leading-tight">Lorem ipsum dolor sit</td>
              <td className="py-2"><div className="h-2.5 w-24 bg-[#b0d69b]"></div></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex h-80 p-8 md:h-full">
        <WorldMap />
      </div>
    </div>
  </Card>
);