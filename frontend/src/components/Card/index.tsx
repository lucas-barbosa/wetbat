import { ReactNode } from 'react';
import { ArrowCounterClockwise, ArrowsOut, DotsThreeVertical } from '@phosphor-icons/react';

type CardProps = {
  className?: string;
  icon?: ReactNode;
  title?: string;
  children: ReactNode;
  isDraggable?: boolean;
  isRefreshable?: boolean;
  hasOptions?: boolean;
  onRefreshClick?: () => void;
};

export const Card = ({
  children,
  icon,
  title,
  onRefreshClick,
  className = '',
  isDraggable = false,
  isRefreshable = false,
  hasOptions = false,
}: CardProps) => (
  <section className={`rounded-md border-2 border-gray-300 bg-white shadow-sm ${className}`}>
    {title && (
      <header className="flex flex-row items-center gap-2 border-b-2 border-gray-300 px-4 py-2">
        {icon && <span className="text-2xl text-accent-500">{icon}</span>}
        <h2 className="text-lg font-medium text-primary-500">{title}</h2>

        <div className="ml-auto flex flex-row items-center gap-2 text-xl text-gray-400">
          {isRefreshable && <button type="button" onClick={onRefreshClick}><ArrowCounterClockwise weight="bold" /></button>}
          {isDraggable && <span><ArrowsOut weight="bold"/></span>}
          {hasOptions && <span><DotsThreeVertical weight="bold" /></span>}
        </div>
      </header>
    )}

    <div>
      {children}
    </div>
  </section>
);