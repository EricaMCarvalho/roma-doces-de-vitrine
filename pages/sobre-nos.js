import { Fragment } from 'react';
import About from '../components/About';

const AboutScreen = () => {
  return (
    <Fragment>
      <About />
      <div className='row'>
        <div className='col-phone-12 col-tab-port-6'>
          <img className='about__image' src='/images/trufas.png' alt='' />
        </div>
        <div className='col-phone-12 col-tab-port-6'>
          <img
            src='/images/macaron.png'
            alt=''
            width='200'
            className='about__image'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AboutScreen;
