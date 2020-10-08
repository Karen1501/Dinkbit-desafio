import styles from "../../styles/Footer.module.scss";

import { Row, Col, Container } from "reactstrap";

function Footer() {
  return (
    <Container fluid={true} className={styles.footer}>
      <Container>
        <Row>
          <Col xs="12" sm="6" md="2">
            <img className={styles.logo} src="/images/logo-dinkbit-22.png" />
            <div className={styles.iconContainer}>
              <div className={[styles.icon1, styles.icon].join(" ")}></div>
              <div className={[styles.icon2, styles.icon].join(" ")}></div>
              <div className={[styles.icon3, styles.icon].join(" ")}></div>
            </div>
          </Col>
          <Col xs="12" sm="6" md="3">
            <div className={styles.textWrapper}>
              <h5>Explora</h5>
              <p>Vende Online</p>
              <p>G Suit</p>
              <p>Trabaja con nosotros</p>
            </div>
          </Col>
          <Col xs="12" sm="6" md="3">
            <img className={styles.logoMex} src="/images/mexico.png" />

            <h5>México</h5>
            <div className={styles.contactWrapper}>
              <p>
                <img src="/images/mail.png" className={styles.mail} />
                contacto@dinkbit.com
              </p>
              <p>
                <img src="/images/phone.png" className={styles.phone} />
                (+52)55 22241607
              </p>
              <p>
                {" "}
                <img src="/images/map-pin.png" className={styles.map} />
                Bosque de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de
                México, México CP 11700
              </p>
            </div>
          </Col>
          <Col xs="12" sm="6" md="3">
            <img className={styles.logo} src="/images/espan╠âa.png" />
            <h5>España</h5>
            <div className={styles.contactWrapper}>
              <p>
                <img src="/images/mail.png" className={styles.mail} />
                contacto@dinkbit.com
              </p>
              <p>
                <img src="/images/phone.png" className={styles.phone} />
                (+34) 657 55 9397 <br></br>
                (+34) 910 37 657
              </p>
              <p>
                {" "}
                <img src="/images/map-pin.png" className={styles.map} />
                Bosque de Ciruelos 130 PH 1201, Miguel Hidalgo, Ciudad de
                México, México CP 11700
              </p>
            </div>
          </Col>
        </Row>
        <hr />

        <Row>
          <Col xs="12" sm="12" md="12" className={styles.footerIcons}>
            <div>
              <p>Aviso de privacidad Términos y condiciones</p>
            </div>

            <div className={styles.smallIcons}>
              <img width="200px" src="/images/logos-23.svg" />
              <img width="200px" src="/images/logos-24.svg" />
              <img width="200px" src="/images/logos-25.svg" />
              <img width="200px" src="/images/logos-26.svg" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
