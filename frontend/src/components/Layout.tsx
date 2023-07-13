import { useState } from 'react';
import { Header } from './Header';
import { Menu } from './Menu';

export const Layout = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleOpenMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const handleCloseMenuClick = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      <Header onOpenSidebarClick={handleOpenMenuClick}/>
      <Menu isMenuOpened={isMenuOpened} onCloseMenuClick={handleCloseMenuClick} />
    </>
  );
};