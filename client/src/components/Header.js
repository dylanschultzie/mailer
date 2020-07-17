import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Payments } from './Payments';

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
        return [
          <li key="0">
            <Payments />
          </li>,
          <li key="1" style={{ margin: '0 1em' }}>
            Credits: {auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? '/surveys' : '/'} className="left brand-logo">
          Mailer
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderContent(auth)}
        </ul>
      </div>
    </nav>
  );
};
