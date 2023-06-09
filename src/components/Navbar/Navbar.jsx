import { list } from 'postcss';
import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [isOpen, setItOpen] = useState(false);
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog"
    }
  ];
  
  return (
    <nav className='bg-purple-300 px-4'>
      <div onClick={() => setItOpen(!isOpen)} className='md:hidden'>
        <span>
          {
            isOpen === true ? 
              <XMarkIcon className="h-6 w-6 text-purple-600" /> 
              : <Bars3Icon className="h-6 w-6 text-purple-600" />
          }
        </span>
      </div>

      <ul className={`md:flex absolute md:static md:py-3 duration-500 pl-8 pb-4 bg-purple-300 ${isOpen ? 'top-6': '-top-36'}`}>
        {
          routes.map(route => <Link
          key={route.id}
          route={route}
          ></Link>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;