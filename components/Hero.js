import Image from 'next/image';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__text'>
        <Image
          src='/images/logo-text.png'
          alt='Roma'
          width='320'
          height='250px'
        />
        <h2 className='heading-secondary'>Amor em forma de doce</h2>
      </div>
    </div>
  );
};

export default Hero;
