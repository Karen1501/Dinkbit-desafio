import styles from "../../styles/Home.module.scss";

import Link from "next/link";

import React, { useState } from "react";

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
} from "reactstrap";

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Container className={styles.container}>
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
                  <NavLink href="/Blog" className={styles.blog}>
                    <Link href="/Blog">
                      <a></a>
                    </Link>
                    Blog
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

          <Container className={styles.textWrapper}>
            <p> dinkbit es un equipo increíble </p>
            <h1>
              Hacemos cosas <br /> increíbles
            </h1>
          </Container>
        </div>

        <Container fluid={true}>
          <Row>
            <Col md="12">
              <div className={styles.designWrapper}>
                <img src="/images/disen╠âo.jpg" className={styles.designImg} />

                <div className={styles.designText}>
                  <p className={styles.desingP}>¿ QUÉ HACEMOS ?</p>
                  <h1>Diseño</h1>
                  <p>
                    Lorem Ipsum is simply dummy text of
                    <br /> the printing and typesetting industry
                  </p>
                  <Button className={styles.btnDesign}>
                    Ver más información
                    <img
                      src="/images/arrow-right.png"
                      className={styles.arrow}
                    />
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Row>
          <Col md="12" lg="12" sm="12">
            <CardColumns className={styles.cardColumn}>
              <Card className={styles.card}>
                <CardBody>
                  <p class="card-text">P R O Y E C T O S </p>
                  <h1 class="card-title">
                    Lucen increíble, funcionan increíble
                  </h1>
                </CardBody>
              </Card>

              <Card className={styles.card}>
                <CardImg src="/images/divya.png" width="100%"></CardImg>
                <p>Diseño y Desarrollo Web - México</p>
                <h2>Divya</h2>
              </Card>

              <Card className={styles.card}>
                <CardImg src="/images/the_fit.png" width="100%"></CardImg>
                <p>Diseño y Desarrollo Web, Branding - México</p>
                <h2>The Fit Pilates</h2>

                <Button color="primary" size="lg" className="my-4">
                  Ver más proyectos <img src="/images/arrow-right.png" />
                </Button>
              </Card>

              <Card className={styles.card}>
                <CardImg src="/images/bull_and_tank.png" width="100%"></CardImg>
                <p>Diseño y Desarrollo Web - México</p>
                <h2>Bull & Tank</h2>
              </Card>

              <Card className={styles.card}>
                <CardImg src="/images/refly.png" width="100%"></CardImg>
                <p>Diseño y Desarrollo Web, Branding - México</p>
                <h2>Refly</h2>
              </Card>

              <Card className={styles.card}>
                <CardImg src="/images/pakmail.png" width="100%"></CardImg>
                <p>Diseño y Estrategia de Redes Sociales - México</p>
                <h2>Pakmail</h2>
              </Card>
            </CardColumns>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className={styles.teamWrapper}>
        <Row>
          <Col lg="12" md="12" sm="12">
            <Container>
              <Row>
                <Col>
                  <img
                    src="/images/jose-salame.svg"
                    className={styles.avatar}
                  />
                </Col>
                <Col>
                  <h1>
                    Un poco <br />
                    de nosotros
                  </h1>
                  <p>
                    Somos un equipo de creativos, diseñadores, desarrolladores,
                    mercadólogos y creadores de contenido
                    <br /> que trabajan para hacer de tu marca, algo increíble.
                  </p>
                  <Button size="lg" className={styles.btnTeam}>
                    Ver más{" "}
                    <img
                      src="/images/arrow-right.png"
                      className={styles.arrowRight}
                    />
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className={styles.brand}>
        <Row>
          <Col lg="6">
            <Card className={styles.cardBrand}>
              <p>C L I E N T E S</p>
              <h1>
                Confían <br />
                en nuestro
                <br /> trabajo
              </h1>
            </Card>

            <Button size="lg" className={styles.btnBrand}>
              Ver más
              <img
                src="/images/arrow-rightdark.png"
                className={styles.arrowDark}
              />
            </Button>
          </Col>

          <Col md="2">
            <img src="/images/normas.png" />
            <img src="/images/starbucks.png" />
            <img src="/images/bull_and_tank_logo.png" />
            <img src="/images/eco.png" />
          </Col>

          <Col md="2">
            <img src="/images/klm.png" />
            <img src="/images/dyva.png" />
            <img src="/images/sergio_perez.png" />
            <img src="/images/packmail.png" />
          </Col>

          <Col md="2">
            <img src="/images/redbull.png" />
            <img src="/images/jac.png" />
            <img src="/images/airfrance.png" />
            <img src="/images/9_round.png" />
          </Col>
        </Row>
      </Container>

      <Container fluid={true}>
        <Row>
          <Col md="9">
            <div className={styles.onlineStore}>
              <div>
                <img src="/images/banner-store.png" className={styles.banner} />
                <h1>
                  Tu tienda en <br />
                  línea en una <br /> semana{" "}
                </h1>
                <p>
                  ¿Quieres convertir una gran idea en un negocio online?
                  <br />
                  Adáptate al cambio y abre tu tienda online, ¡es el momento!
                </p>
                <Button size="lg">
                  Ver más información
                  <img src="/images/arrow-right.png" className={styles.arrow} />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={styles.indicators}>
        <Row className={styles.rowIndicators}>
          <Col>
            <Card className={styles.indicatorsCard}>
              <img src="/images/indicadores-19.svg" alt="Card image cap" />
              <CardBody>
                <h1> +600</h1>
                <p>Clientes que confían en nuestro trabajo</p>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className={styles.indicatorsCard}>
              <img src="/images/indicadores-18.svg" alt="Card image cap" />
              <CardBody>
                <h1> +1000</h1>
                <p>Proyectos de marketing, desarrollo y diseño</p>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card className={styles.indicatorsCard}>
              <img src="/images/indicadores-17.svg" alt="Card image cap" />
              <CardBody>
                <h1> Top #30</h1>
                <p>Posicionados como agencia de marketing en México</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs="12">
            <div className={styles.titleh1}>
              <h1>
                Compartimos <br /> lo que sabemos
              </h1>
            </div>
          </Col>

          <Col xs="6">
            <Card className={`flex-row ${styles.cardLast}`}>
              <Row>
                <Col xs="4">
                  <img
                    className={styles.entryPic}
                    src="/images/card-img-1.png"
                    alt="Card image cap"
                  />
                </Col>
                <Col xs="8">
                  <CardBody>
                    <h3 className="p-0 py-2 pr-2">
                      Las mejores prácticas para el diseño UX/UI de tu web
                    </h3>
                    <p className="d-flex justify-content-between m-0">
                      <img
                        src="/images/vaqueiro.svg"
                        className={styles.avatar}
                      />
                      Por Jorge V.
                    </p>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xs="6">
            <Card className={`flex-row ${styles.cardLast}`}>
              <Row>
                <Col xs="4">
                  <img
                    className={styles.entryPic}
                    src="/images/card-img-2.png"
                    alt="Card image cap"
                  />
                </Col>

                <Col xs="8">
                  <CardBody>
                    <h3 className="p-0 py-2 pr-2">
                      {" "}
                      La estrategía de marketing #1 para emprendimientos
                    </h3>
                    <p className="d-flex justify-content-between m-0">
                      <img src="/images/pincho.svg" className={styles.avatar} />
                      Por Luz E.
                    </p>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <div className={styles.btnWrapper}>
          <Button className={styles.btnCard}>
            Ver más articulos <img src="/images/arrow-rightdark.png" />
          </Button>
        </div>
      </Container>

      <Container fluid={true} className={styles.footerContainer}>
        <Row>
          <Col>
            <h1>¡Te queremos escuchar!</h1>
            <Button>
              Contactanos <img src="/images/arrow-right.png" />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
