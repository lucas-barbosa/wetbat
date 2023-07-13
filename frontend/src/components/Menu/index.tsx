import { Article, ChartLine, CurrencyDollarSimple, Exam, Gear, House, Lifebuoy, PaperPlaneTilt, Users, X } from '@phosphor-icons/react';

const menuItems = [
  [
    { icon: <House />, title: 'Home', href: '/' },
    { icon: <CurrencyDollarSimple />, title: 'Quotes', href: '/quotes' },
    { icon: <Exam />, title: 'Leads', href: '/leads' },
    { icon: <PaperPlaneTilt />, title: 'Tours', href: '/tours' },
  ],
  [
    { icon: <Article />, title: 'Invoices', href: '/invoices' },
    { icon: <ChartLine weight="fill" />, title: 'Analytics', href: '/analytics' },
    { icon: <Users />, title: 'Team', href: '/team' },
    { icon: <Gear />, title: 'Admin', href: '/admin' },
    { icon: <Lifebuoy />, title: 'Suport', href: '/suport' },
  ]
];

type MenuProps = {
  isMenuOpened: boolean;
  onCloseMenuClick: () => void;
}

export const Menu = ({ isMenuOpened, onCloseMenuClick }: MenuProps) => {
  const openedMenuClasses = 'translate-x-0';
  const closedMenuClasses = '-translate-x-full';

  return (
    <aside className={`absolute z-10 h-full bg-gray-100 transition-transform max-md:w-1/2 max-sm:w-full md:translate-x-0 ${isMenuOpened ? openedMenuClasses : closedMenuClasses}`}>
      <nav className="relative flex flex-col">
        <button
          type="button"
          className="absolute right-2 top-2 rounded-full p-2 text-primary-500 hover:text-primary-400 md:hidden"
          title="Close menu"
          onClick={onCloseMenuClick}>
          <X size={25} />
        </button>

        {menuItems.map((group, index) => (
          <div key={`menu-group-${index}`} className="border-b border-gray-400">
            {group.map(item => (
              <a key={`menu-item-${item.title}`}
                href={item.href}
                className="flex flex-row items-center gap-2 px-6 py-4 font-medium text-primary-500 hover:bg-primary-200">
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </a>
            ))}          
          </div>
        ))}
      </nav>

      <p className="p-4 text-center text-sm text-gray-500">
        Allright received<br />
        by wetbat {new Date().getFullYear()}®
      </p>
    </aside>
  );
};