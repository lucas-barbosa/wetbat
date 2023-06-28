import { ReactNode } from "react"

type CardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export const Card = ({ children, icon, title }: CardProps) => (
  <section className="rounded border border-gray-400 bg-white shadow-sm">
    <header className="flex flex-row border-b border-gray-400 p-4">
      {icon}
      <h2>{title}</h2>

      <div className="ml-auto">
        Items
      </div>
    </header>

    <div>
      {children}
    </div>
  </section>
)