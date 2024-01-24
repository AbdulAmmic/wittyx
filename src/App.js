import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Column } from './components/layouts';
import Button from '../src/components/CustomButton'
import { FaBars, FaTimes } from 'react-icons/fa';
import SideNav from '../src/components/sidenav'

const App = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleSideNavItemClick = (item) => {
    console.log(`Clicked on item: ${item}`);
    // Add any logic you want to perform on side nav item click
  };

  return (
    <Container>
      {/* SideNav component */}
     

      {/* Main content */}
      <Row>
        <Column display="flex" justifyContent="space-between" alignItems="center" padding="20px">
         
          <h1>Welcome To wittyX Design Template</h1>
       
        </Column>
      </Row>

      <Row>
        <Column padding="20px">
          <h2>Welcome to Your App</h2>
          <p>This is a simple starter page using your layout components and Bootstrap styling.</p>
          <Button text="Get Started" variant="success" />
        </Column>
      </Row>
    </Container>
  );
};

export default App;
