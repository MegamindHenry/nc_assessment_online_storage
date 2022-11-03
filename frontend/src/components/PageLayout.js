import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useIsAuthenticated } from '@azure/msal-react';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';
import PropTypes from 'prop-types';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();
  return (
    <>
      <Navbar bg="primary" variant="dark" className="justify-content-between">
        <a className="navbar-brand" href="/">
          Online Storage
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <div className="App">{props.children}</div>
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.any
};