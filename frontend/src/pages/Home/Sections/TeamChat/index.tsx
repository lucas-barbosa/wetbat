import { Chat, ChatText } from '@phosphor-icons/react';
import { Card } from '../../../../components/Card';

const defaultUsers: User[] = [
  {
    id: 'customer-service-1',
    image: '/images/faces/face-5.png',
    name: 'Peter Rock',
    active: true
  },
  {
    id: 'customer-service-2',
    image: '/images/faces/face-8.png',
    name: 'Ethan Anderson',
    active: true
  },
  {
    id: 'customer-service-3',
    image: '/images/faces/face-7.png',
    name: 'Olivia Roberts',
    active: true
  },
  {
    id: 'customer-service-4',
    image: '/images/faces/face-6.png',
    name: 'Emily Johnson',
    active: false
  }
];

type User = {
  id: string;
  image: string;
  name: string;
  active: boolean;
};

type TeamChatProps = {
  users?: User[];
  className?: string;
};

export const TeamChat = ({ className = '', users = defaultUsers }: TeamChatProps) => (
  <Card
    icon={<Chat />}
    title="Team chat"
    className={className}
    hasOptions>
    <ul>
      {users.map(user => (
        <li key={`team-chat-user-${user.id}`}
          className="flex cursor-pointer flex-row items-center gap-4 p-4 text-gray-500 hover:bg-gray-100 hover:text-primary-500">
          <div className="relative">
          <img src={user.image} alt={`${user.name} photo`} className="block h-14 w-14 rounded-lg object-cover" />
            <span
              className={`absolute right-0 top-0 h-3 w-3 -translate-y-0.5 translate-x-0.5 rounded-full border border-white ${user.active ? 'bg-green-500' : 'bg-red-500'}`}
              aria-label={`User is ${user.active ? 'online' : 'offline'} now.`}
            ></span>
          </div>

          <div>
            <h3 className="font-medium">{user.name}</h3>
            <p className="text-xs font-light">Customer service {user.active ? 'available' : 'unavailable'}</p>
          </div>

          <ChatText weight="fill" className="ml-auto text-4xl text-accent-500" />
        </li>
      ))}
    </ul>
  </Card>
);