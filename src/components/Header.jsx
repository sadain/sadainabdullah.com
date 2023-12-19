import React, { useState, useEffect } from 'react';
import { FiUser, FiBriefcase, FiSettings, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo - Sadain.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsScrolled(currentScrollPos > 0 && currentScrollPos < prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navItems = [
    { icon: <FiUser />, name: 'About', link: "#about" },
    { icon: <FiBriefcase />, name: 'Likes', link: "#experience" },
    { icon: <FiSettings />, name: 'Settings', link: "#projects" },
    { icon: <FiPhoneCall />, name: 'Profile', link: "#contact" },
  ];

  return (
    <>
      <header className={`top-0 w-full z-10 ${isScrolled ? 'fixed backdrop-filter backdrop-blur-lg bg-white bg-opacity-70 shadow-md' : 'relative bg-transparent'} transition-all duration-300 ease-in-out`}>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center sm:justify-between sm:gap-4">
            <div class="flex items-center justify-between max-sm:hidden">
              <Link class="flex-none text-xl font-semibold dark:text-white" to="/">
                <img src={Logo} alt="Sadain" />
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
              <div className="flex gap-4">
                {navItems.map((item, index) => (
                  <Link to={item.link} className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-lg hover:text-gray-700">
                    <span className="sr-only">{item.name}</span>
                    {item.icon}
                  </Link>))}
              </div>
              <button type="button" className="group flex shrink-0 items-center rounded-lg transition" >
                <span className="sr-only">Menu</span>
                <img alt="Man" src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="h-10 w-10 rounded-full object-cover" />
                <p className="ms-2 hidden text-left text-xs sm:block">
                  <strong className="block font-medium">Sadain Abdullah</strong>
                  <a className="text-gray-500" href="mailto:someone@example.com"> nsasadain@gmail.com </a>
                </p>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>

  );
};

export default Header;