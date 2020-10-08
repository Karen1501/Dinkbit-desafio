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
  CardText,
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
                      <Col>
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
                          <CardText>{post.content}</CardText>
                          <img src={post.avatar} />
                          <p>{post.author}</p>
                          <p>{post.time}</p>
                        </Card>
                        <hr />
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>
            <Col xs="4">
              <Input addon type="search" aria-label="Buscar un artículo" />
              <hr />
              <h3>Filtros</h3>
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Todo</p>
              </InputGroupText>
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Dinkbit</p>
              </InputGroupText>
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  label="Checkbox for following text input"
                />
                <p>Desarrollo Web</p>
              </InputGroupText>
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Diseño, UI, UX</p>
              </InputGroupText>
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>Marketing Digital</p>
              </InputGroupText>
              <InputGroupText>
                <Input
                  addon
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
                <p>General</p>
              </InputGroupText>
              <hr />
              <h1>Top 5 Destacados</h1>
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
            </Col>
          </Row>
        </Container>

        <Container fluid={true}>
          <Row>
            <Col>
              <Container>
                <Col>
                  <h1>Suscríbete a nuetro Newsletter</h1>
                  <InputGroupText>@example.com</InputGroupText>
                  <Button>
                    Suscribirme <img></img>
                  </Button>
                </Col>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default Blog;
