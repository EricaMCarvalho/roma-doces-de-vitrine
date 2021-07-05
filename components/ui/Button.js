import Link from 'next/link';

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={`button ${props.classes}`}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={`button ${props.classes}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
