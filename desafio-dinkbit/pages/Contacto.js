import React, { useState } from "react";
import styles from "../styles/Contacto.module.scss";

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
  CardColumns,
  Card,
  CardBody,
  CardImg,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Contact = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={styles.wrapper}>
        <Navbar light expand="md" className={styles.Navbar}>
          <NavbarBrand href="/">
            <img className={styles.logo} src="/images/logo-dinkbit-22.png" />
          </NavbarBrand>
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
              <NavItem color="primary">
                <NavLink href="/components/" className={styles.blog}>
                  Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className={styles.textWrapper}>
          <h1>Te queremos escuchar</h1>
          <p>
            Si tienes dudas, comentarios, propuestas, proyetos o quieres
            trabajar con nosotros, escríbenos{" "}
          </p>
        </Container>
      </div>

      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Plain Text (Static)</Label>
            <Input plaintext value="Some plain text/ static value" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUrl">Url</Label>
            <Input
              type="url"
              name="url"
              id="exampleUrl"
              placeholder="url placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Number</Label>
            <Input
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="number placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDatetime">Datetime</Label>
            <Input
              type="datetime"
              name="datetime"
              id="exampleDatetime"
              placeholder="datetime placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="time placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleColor">Color</Label>
            <Input
              type="color"
              name="color"
              id="exampleColor"
              placeholder="color placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSearch">Search</Label>
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="search placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <FormGroup>
            <Label for="exampleRange">Range</Label>
            <Input type="range" name="range" id="exampleRange" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" /> Option one is this and that—be sure to
              include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" /> Check me out
            </Label>
          </FormGroup>
        </Form>
      </div>
    </>
  );
};

export default Contact;
