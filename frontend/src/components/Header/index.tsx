import { BellSimple, Chat, Gear, GridFour } from '@phosphor-icons/react';
import { SearchBar } from './SearchBar';
import { UserAccountMenu } from './UserAccountMenu';

type HeaderProps = {
  onOpenSidebarClick: () => void;
}

export const Header = ({ onOpenSidebarClick }: HeaderProps) => (
  <header className="sticky top-0 z-[2000] bg-primary-500 text-white">
    <div className="mx-auto flex flex-row items-center justify-between py-4 xl:container max-xl:px-6 max-md:px-4">
      <div className="flex items-center gap-6">
        <button title="Open side menu" onClick={onOpenSidebarClick}>
          <GridFour weight="fill" size={35} />
        </button>

        <a href="/" title="Go to WetBat Home">
          <img src="wetbat.png" title="WetBat Logo" className="h-10" />
        </a>
      </div>

      <div className="flex items-center gap-10 text-2xl">
        <div className="max-md:hidden">
          <SearchBar />
        </div>

        <div className="flex items-center gap-6 max-sm:hidden">
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