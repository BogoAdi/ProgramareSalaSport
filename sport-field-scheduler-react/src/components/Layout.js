import React from 'react';
import Container from '@mui/material/Container';
import AppBarMenu from './AppBarMenu';

const Layout = (props) => {

  return (
    <>
      <AppBarMenu />
      <Container minwidth="sm">
        {props.children}
      </Container>
    </>
  );
}

export default Layout;
