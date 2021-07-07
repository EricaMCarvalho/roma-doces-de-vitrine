const ClientInfoScreen = (props) => {
  return (
    <div>
      <h1 className='heading-primary'>Seus dados</h1>
      <p>{props.username}</p>
    </div>
  );
};

// runs for every incoming request
// as opposed to getStaticProps, context also gets access to the request object
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Erica',
    },
  };
};

export default ClientInfoScreen;
