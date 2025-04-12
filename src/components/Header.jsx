import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3 sticky-top">
      <nav className="container d-flex justify-content-md-between justify-content-center align-items-center">
        <h2 className="m-0 text-center text-white">PhamGiaLuong</h2>
        <div className='d-none d-md-block'>
          <a href="#about" className="text-white mx-3 tab">About</a>
          <a href="#education" className="text-white mx-3 tab">Education</a>
          <a href="#skills" className="text-white mx-3 tab">Skills</a>
          <a href="#projects" className="text-white mx-3 tab">Projects</a>
          {/* <a href="#contact" className="text-white mx-3 tab">Contact</a> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;