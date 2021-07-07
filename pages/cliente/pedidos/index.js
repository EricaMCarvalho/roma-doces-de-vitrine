// this page doesn't need to be pre-rendered (personal data or changing a lot)

import { useEffect, useState } from 'react';
import useSWR from 'swr';

const OrdersScreen = (props) => {
  const [orders, setOrders] = useState(props.data);

  //TODO
  const { data, error } = useSWR('URL');

  useEffect(() => {
    if (data) {
      // transform data if neeed
      setOrders(data);
    }
  }, [data]);

  if (!data && !orders) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Failed to load</p>;
  }

  return (
    <h1 className='heading-primary'>Seus pedidos - Página em construção</h1>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get(
    '/https://roma-fd61e-default-rtdb.firebaseio.com/sales'
  );

  return {
    props: {
      orders: data,
    },
    revalidate: 10,
  };
};

export default OrdersScreen;
