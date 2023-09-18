import React from 'react';

const Header = ({title, text}) => {
  return (
    <div className="text-center mb-12">
      <p className="text-[48px] font-alice text-[#272932] dark:text-white">{title}</p>
      <p className="text-[18px] font-lato text-[#3E4A5B] dark:text-gray-200">{text}</p>
    </div>
  );
};

export default Header;