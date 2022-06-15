import React from 'react';
import Container from '@mui/material/Container';
import AppBarMenu from './AppBarMenu';
import {green} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
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
