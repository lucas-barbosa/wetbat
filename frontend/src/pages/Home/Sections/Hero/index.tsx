import { Card } from '../../../../components/Card';

const defaultReportItems: ReportItem[] = [
  { label: 'New Leads', count: 101 },
  { label: 'Qootes Created', count: 35 },
  { label: 'Pending Order', count: 40 },
];

type ReportItem = {
  label: string;
  count: number;
};

type HeroProps = {
  reportItems?: ReportItem[];
};

export const Hero = ({ reportItems = defaultReportItems }: HeroProps) => (
  <Card className="col-span-full !border-none bg-gradient-to-r from-[#40c9c6] to-[#4264c7]">
    <div className="my-4 grid gap-4 p-8 md:grid-cols-[1fr_1.5fr]">
      <header className="text-white">
        <h1 className="text-center text-3xl font-bold leading-tight md:max-w-[230px] md:text-left">Welcome to your dashboard</h1>
        <p className="mt-5 leading-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </header>

      <div className="flex w-full flex-col items-center gap-8">
        <img
          src="/hero.svg"
          alt="A man working on a computer and a man and woman watching and talking to him"
          className="max-w-sm"
        /> 

        <ul className="flex w-full max-w-lg justify-between gap-4">
          {reportItems.map(reportItem => (
            <li className="flex items-center">
              <span className="text-5xl font-bold text-yellow-500 drop-shadow-lg">{reportItem.count}</span>
              <span className="ml-2 w-min uppercase leading-5 text-white">{reportItem.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Card>
);