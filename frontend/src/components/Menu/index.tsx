import { Article, ChartLine, CurrencyDollarSimple, Exam, Gear, House, Lifebuoy, PaperPlaneTilt, Users } from '@phosphor-icons/react';

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

export const Menu = () => (
  <aside className="fixed z-10 h-full bg-gray-100">
    <nav className="flex flex-col">
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