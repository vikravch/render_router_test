import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="section">
        <div className="container">
          <div className="tabs is-boxed">
            <ul>
              <li data-cy="Tab" className="is-active">
                <Link to="/tabs/1">Tab 1</Link>
              </li>
              <li data-cy="Tab">
                <Link to="/tabs/2">Tab 2</Link>
              </li>
              <li data-cy="Tab">
                <Link to="/tabs/3">Tab 3</Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
};
