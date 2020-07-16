import React, { Component } from 'react';

export const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Mailer
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
