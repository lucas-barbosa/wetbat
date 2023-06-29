import { BellSimple, Chat, Gear } from '@phosphor-icons/react';
import { SearchBar } from './SearchBar';
import { UserAccountMenu } from './UserAccountMenu';

export const Header = () => (
  <header className="relative bg-primary-500 text-white">
    <div className="container flex flex-row items-center justify-between py-4">
      <div>
        Logo
      </div>

      <div className="flex items-center gap-10 text-2xl">
        <SearchBar />

        <div className="flex items-center gap-6">
          <span><BellSimple weight="bold" /></span>
          <span><Chat weight="fill" /></span>
          <span><Gear weight="bold" /></span>
        </div>

        <UserAccountMenu />
      </div>
    </div>
  </header>
);