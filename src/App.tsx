import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav className="navbar is-light is-mobile has-shadow" data-cy="Nav">
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={classNames('navbar-item', {
                'is-active': pathname === '/',
              })}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': pathname === '/tabs',
              })}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer></footer>
    </>
  );
};

// https://mate-academy.github.io/react_people-table-advanced/people/pieter-antone-haverbeke-1753?centuries=17&centuries=18&sex=m&query=ja#qweyrty
