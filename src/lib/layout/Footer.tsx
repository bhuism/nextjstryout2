import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {new Date().getFullYear()} -{' '}
      <Link href="/" rel="noopener noreferrer">
        testjs.impl.nl
      </Link>
    </>
  );
};

export default Footer;
