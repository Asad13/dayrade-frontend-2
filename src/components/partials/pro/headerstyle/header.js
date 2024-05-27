import React, { useState, useEffect, memo } from 'react';

//react-bootstrap
import { Container } from 'react-bootstrap';

const Header = memo((props) => {
  return <Container fluid className="dayrade-header"></Container>;
});

Header.displayName = 'Header';
export default Header;
