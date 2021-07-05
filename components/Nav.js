import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='navigation__nav'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <Link href='/produtos'>
            <a className='navigation__link'>Nossos Produtos</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/contato'>
            <a className='navigation__link'>Fale Conosco</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/sacola'>
            <a className='navigation__link'>Sua sacola</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/pedidos'>
            <a className='navigation__link'>Seus pedidos</a>
          </Link>
        </li>
        <li className='navigation__item'>
          <Link href='/login'>
            <a className='navigation__link'>Entre ou cadastre-se</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
