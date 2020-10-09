import NavBarD from "../src/Components/NavBar.js";
import styles from "../styles/Blog.module.scss";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getPosts } from "../src/Components/server";

import {
  Card,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
  Input,
  InputGroupText,
  Button,
} from "reactstrap";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      console.log(data);
      let postArray = Object.keys(data).map((key) => {
        return { ...data[key], key };
      });

      setPosts(postArray);
    });
  });

  return (
    <div>
      <Head>
        <title>Dinkbit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBarD />
        <Container>
          <Row>
            <Col xs="8">
              <Row>
                {posts.map((post) => {
                  return (
                    <>
                      <Col md="12">
                        <Card className={styles.cardPost}>
                          <CardImg
                            src={post.img}
                            className={styles.imgPost}
                          ></CardImg>
                          <CardTitle>
                            <Link href={`/Post-detail?postkey=${post.key}`}>
                              <a>{post.title}</a>
                            </Link>
                          </CardTitle>
                          <p>{post.content.slice(0, 190)}</p>

                          <Card className={styles.infWrapper}>
                            <img src={post.avatar} className={styles.avatar} />
                            <div className={styles.info}>
                              <h5>{post.author}</h5>
                              <p> - {post.time}</p>
                            </div>
                          </Card>
                        </Card>
                        <hr />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>

            <Col xs="4">
              <div className={styles.input}>
                <label>Buscar un artículo</label>
                <Input />
              </div>

              <hr />

              <div>
                <h3>Filtros</h3>
              </div>

              <InputGroupText className={styles.inputGroup}>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                  label="Todo"
                />
                <label>Todo</label>
              </InputGroupText>

              <InputGroupText className={styles.inputGroup}>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <label>Dinkbit</label>
              </InputGroupText>

              <InputGroupText className={styles.inputGroup}>
                <Input
                  addon
                  type="checkbox"
                  label="Checkbox for following text input"
                />
                <label>Desarrollo Web</label>
              </InputGroupText>

              <InputGroupText className={styles.inputGroup}>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <label>Diseño, UI/UX</label>
              </InputGroupText>

              <InputGroupText className={styles.inputGroup}>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <label>Marketing Digital</label>
              </InputGroupText>

              <InputGroupText className={styles.inputGroup}>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />

                <label>General</label>
              </InputGroupText>
              <hr />

              <h1>Top 5 Destacados</h1>
              <div className={styles.list}>
                <ul className="list-group">
                  {posts
                    .filter((post) => post.featured == true)
                    .map((post, index) => {
                      return (
                        <li className="list-group-item border-none ">
                          <h2 className="d-inline text-muted">0{index + 1}</h2>
                          {post.title} <br />
                          {post.date}
                          <br />
                          {post.time}
                          <br />
                        </li>
                      );
                    })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid={true}>
          <Row className={styles.newsletterContainer}>
            <Col sm="12" md="6" className={styles.text}>
              <h2> Suscríbete a nuestro Newsletter</h2>
              <div className={styles.input}>
                {" "}
                <p>Correo electrónico</p>
              </div>
              <button> Suscribirme </button>
            </Col>
            <Col sm="12" md="6">
              <img alt="" src="/images/newsletter.png" />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Blog;
