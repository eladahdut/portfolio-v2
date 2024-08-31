import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex justify-between'>
        <Link href='/'>My Portfolio</Link>
        <div className='flex space-x-4'>
          <Link className='text-gray-300 hover:text-white' href='/projects'>
            Projects
          </Link>
          <Link className='text-gray-300 hover:text-white' href='/about'>
            About
          </Link>
          <Link className='text-gray-300 hover:text-white' href='/contact'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
