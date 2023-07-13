import { useEffect, useRef, useState } from 'react';

export const UserAccountMenu = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsOpened]);
  
  return (
    <div className="flex items-center sm:relative" ref={modalRef}>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-accent-500 text-white"
        title="Open Account Menu"
        onClick={() => setIsOpened(!isOpened)}>
        <span className="text-xl font-bold">L</span>  
      </button>

      {isOpened && (
        <div className="absolute right-0 top-full z-10 w-full overflow-hidden rounded bg-white text-base text-primary-500 shadow sm:top-[calc(100%+1rem)] sm:w-48">
          <div className="p-2">
            <p className="font-normal">Welcome, Lucas!</p>
            <p className="font-light">your.email@gmail.com</p>
          </div>

          <ul className="z-10 mt-2 divide-y divide-gray-100 border-t border-gray-100 bg-white py-2 font-medium">
            <li><a className="block w-full px-3 py-2 text-left transition-colors hover:bg-blue-100" href="/my-account">Meu Perfil</a></li>
            <li><button className="block w-full px-3 py-2 text-left transition-colors hover:bg-blue-100" type="button">Sair</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};