import { Fragment } from 'react';

const About = () => {
  return (
    <div className='about'>
      <h1 className='heading-primary'>Sobre nós</h1>
      <div className='row'>
        <div className='col-phone-12 col-tab-port-6'>
          <img
            src='/images/sobre-nos.png'
            alt=''
            width='300'
            className='about__image-box'
          />
        </div>
        <div className='col-phone-12 col-tab-port-6'>
          <div className='about__text-box'>
            <p>
              Duas amigas que decidiram inovar suas vidas na pandemia! Eis o
              resultado: doces finos e lindos para vocês. Queremos dividir com
              os nossos clientes o que há de melhor na confeitaria e mostrar que
              o simples pode se tornar sofisticado quando bem feito. Esperamos
              que amem... afinal tudo aqui é feito com muito amor!
            </p>
            <p className='heading-secondary'>Roberta e Maísa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
