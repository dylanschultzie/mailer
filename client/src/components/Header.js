import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const auth = useSelector((state) => state.auth);
  function renderContent(auth) {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign in with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a>Logout</a>
          </li>
        );
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Mailer
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent(auth)}
        </ul>
      </div>
    </nav>
  );
};
