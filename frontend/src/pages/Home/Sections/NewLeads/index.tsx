import { EnvelopeSimple } from '@phosphor-icons/react';
import { Card } from '../../../../components/Card';

const defaultMessages: Message[] = [
  {
    id: 'rand-message-123',
    userName: 'John Doe',
    content: 'Hey! I want to place my package',
    time: '13:40 PM',
    image: '/images/faces/face-1.png'
  },
  {
    id: 'rand-message-456',
    userName: 'Jane Smith',
    content: 'Hey! I want to place my package',
    time: '13:50 PM',
    image: '/images/faces/face-2.png'
  },
  {
    id: 'rand-message-789',
    userName: 'Jack Taylor',
    content: 'Hey! I want to place my package',
    time: '14:40 PM',
    image: '/images/faces/face-3.png'
  },
  {
    id: 'rand-message-000 ',
    userName: 'Jane Doe',
    content: 'Hey! I want to place my package',
    time: '15:40 PM',
    image: '/images/faces/face-4.png'
  }
];

type Message = {
  id: string;
  image: string;
  userName: string;
  content: string;
  time: string;
};

type NewLeadsProps = {
  messages?: Message[];
};

export const NewLeads = ({ messages = defaultMessages }: NewLeadsProps) => (
  <Card
    icon={<EnvelopeSimple />}
    title="New Leads"
    isRefreshable
    isDraggable
  >
    <ul className="flex w-full flex-col gap-2 overflow-hidden">
      {messages.map(message => (
        <li key={`message-${message.id}`} className="flex cursor-pointer flex-row items-center gap-4 p-4 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary-500">
          <img src={message.image} alt={`${message.userName} photo`} className="h-14 w-14 rounded-full" />

          <div className="flex w-full flex-row justify-between gap-2">
            <div>
              <h3 className="font-medium">{message.userName}</h3>
              <p className="text-xs font-light">{message.content}</p>
            </div>

            <time className="text-xs font-medium">{message.time}</time>
          </div>
        </li>
      ))}
    </ul>
  </Card>
);