import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import HeaderBackground from '../assets/images/header_background.png';

const Header = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen w-full bg-cover bg-center text-gray-100"
      style={{ backgroundImage: `url(${HeaderBackground})` }}
    >
      <h1 className="font-bold tracking-tight text-shadow-md text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Stéphane DE LA TORRE
      </h1>
      <p className="mt-7 text-shadow-sm text-gray-500 font-semibold px-4 text-center text-xs lg:text-sm xl:text-lg">
        Développeur Fullstack Ruby on Rails basé à Bordeaux le jour,
        <br className="block md:hidden" /> passionné touche à tout la nuit.
      </p>
      <div className="mt-7">
        <a
          href="https://www.linkedin.com/in/st%C3%A9phane-de-la-torre-b748a3144/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-indigo-500 text-shadow-md md:text-sm lg:text-base"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/volchan"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 hover:text-indigo-500 text-shadow-md md:text-sm lg:text-base"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default Header;
