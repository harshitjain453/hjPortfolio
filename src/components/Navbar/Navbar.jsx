import React, { useEffect, useState } from 'react';
import './Navbar.scss';

const links = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'TOOLKIT', href: '#skills' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-inner page-width">
        <a className="app__navbar-logo" href="#home" onClick={() => setOpen(false)} aria-label="Harshit Jain, back to top">HJ<span>.</span></a>
        <span className="app__navbar-caption">HARSHIT JAIN<br />FULL-STACK ENGINEER</span>
        <button className="app__navbar-toggle" type="button" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'CLOSE −' : 'MENU +'}</button>
        <div id="primary-navigation" className={`app__navbar-links ${open ? 'is-open' : ''}`}>
          {links.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="app__navbar-cta" href="#contact" onClick={() => setOpen(false)}>LET’S TALK <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;