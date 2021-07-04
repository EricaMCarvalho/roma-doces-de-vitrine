import Image from 'next/image';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className='header'>
      <Navigation />

      <div className='header__logo-box'>
        <Image
          src='/images/logo-name.png'
          alt='Roma'
          width='120'
          height='70px'
        />
      </div>
      <div className='header__button header__button--left'>
        <i className='header__icon fas fa-shopping-bag'></i>
      </div>
    </header>
  );
};

export default Header;
