// this page doesn't need to be pre-rendered (personal data or changing a lot)

const OrderDetailsScreen = (props) => {
  return <div>Order Details {props.id}</div>;
};

export const getServerSideProps = async (context) => {
  return {
    props: {
      id: context.params.orderId,
    },
  };
};
export default OrderDetailsScreen;
