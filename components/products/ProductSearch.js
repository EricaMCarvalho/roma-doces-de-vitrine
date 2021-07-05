import { useState, useRef } from 'react';
import Button from '../ui/Button';
import categories from '../../data/categories';

const ProductSearch = ({ onSearch }) => {
  const categoryRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(categoryRef.current.value);
  };

  return (
    <form className='form'>
      <div className='form__controls'>
        <div className='form__control'>
          <label htmlFor='category'>Categoria</label>
          <select id='category' ref={categoryRef}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={submitHandler}>Buscar produtos</Button>
    </form>
  );
};

export default ProductSearch;
