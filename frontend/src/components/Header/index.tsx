import { BellSimple, Chat, Gear } from '@phosphor-icons/react';
import { SearchBar } from './SearchBar';
import { UserAccountMenu } from './UserAccountMenu';

export const Header = () => (
  <header className="relative bg-primary-500 text-white">
    <div className="container mx-auto flex flex-row items-center justify-between py-4">
      <div>
        <a href="/" title="Go to WetBat Home">
          <img src="/wetbat.png" title="WetBat Logo" className="h-10" />
        </a>
      </div>

      <div className="flex items-center gap-10 text-2xl">
        <SearchBar />

        <div className="flex items-center gap-6">
          <button type="button" title="Show Notifications" className="p-2 outline-accent-500">
            <span><BellSimple weight="bold" /></span>
          </button>

          <button type="button" title="Show Messages" className="p-2 outline-accent-500">
            <span><Chat weight="fill" /></span>
          </button>

          <a href="/settings" title="Settings" className="p-2 outline-accent-500">
            <span><Gear weight="bold" /></span>
          </a>
        </div>

        <UserAccountMenu />
      </div>
    </div>
  </header>
);