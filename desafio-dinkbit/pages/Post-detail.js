import React, { useState, useEffect } from "react";
import styles from "../styles/Post-detail.module.scss";
import { getPost } from "../src/Components/server";
import { useParams } from "react-router-dom";
import Link from "next/link";

import {
  Card,
  CardText,
  CardTitle,
  CardImg,
  Container,
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
  Row,
  Col,
} from "reactstrap";

function PostDetail() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [post, setPost] = useState({});
  //const { key } = useParams();
  useEffect(() => {
    //console.log("hola");
    /*extraemos toda la lista de parámetros de la url*/
    const urlParams = new URLSearchParams(window.location.search);
    /*extraemos el parametro "postkey" y lo guardamos en la variable "key"*/
    const key = urlParams.get("postkey");

    /*ahora la variable key contiene la llave que identifica al post que queremos mostrar*/
    //console.log(key);

    /*usamos la key para traer la información del post que queremos pintar*/
    getPost(key).then((response) => {
      /*impirimimos la respuestas para ver qué es lo que tiene dentro del post*/
      //console.log(response);
      /*guardamos la información del post en el state*/
      setPost(response);
    });
  });

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
      </div>

      <Container className={styles.postWrapper}>
        <Row>
          <Col md="12">
            <Link href={"/Blog"}>
              <a>
                <img src="/images/chevron-left.png" /> Regresar al blog
              </a>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <img src={post.img}></img>
            <p>{post.content}</p>

            <Card>
              <CardImg src={post.avatar}></CardImg>
              <CardTitle>{post.author}</CardTitle>
              <p>{post.role}</p>
              <CardText>{post.cuote}</CardText>
              <p></p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PostDetail;
