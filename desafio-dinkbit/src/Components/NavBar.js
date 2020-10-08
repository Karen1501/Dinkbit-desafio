import React, { useState } from "react";
import styles from "../../styles/NavBar.module.scss";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

const NavBarD = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.container}>
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img className={styles.logo} src="/images/logo-dinkbit-22.svg" />
        </NavbarBrand>
        <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Nosotros</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  ¿Qué hacemos?
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Desarrollo Web</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Desarrollo móbil</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Diseño de marca</DropdownItem>
                  <DropdownItem divider />
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">Proyectos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Contacto</NavLink>
              </NavItem>
              <div className={styles.blog}>
                <NavItem>
                  <NavLink href="/components/">Blog</NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      <Container className={styles.textWrapper}>
        <p> B L O G </p>
        <h1> Compartimos</h1>
        <h1> cosas increíbles</h1>
      </Container>
    </div>
  );
};

export default NavBarD;
